'use strict';
import axios from 'axios';
import fs from 'fs';
import SP500 from '../models/sp500Model.js';
import db from '../db/db_connection.js'

// Retrieve data from the API and write to JSON file
const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=SPY&apikey=FLX29CIG5OCO4RJD';

axios.get(url, {
  headers: {
    'User-Agent': 'axios'
  }
})
  .then(response => {
    // Data is successfully retrieved as a JSON object
    console.log(response.data);

    // Convert the data to JSON string
    const jsonData = JSON.stringify(response.data);

    // Write the JSON data to a file
    fs.writeFile('data.json', jsonData, (error) => {
      if (error) {
        console.error('Error writing to file:', error);
      } else {
        console.log('Data written to file successfully.');
      }
    });
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.log('Error:', error.message);
  });


//Manipulate data to desired format for DB
const jsonData = fs.readFileSync('data.json', 'utf8');
const data = JSON.parse(jsonData);
const filteredData = Object.entries(data).filter(([date]) => {
    const month = new Date(date).getMonth() + 1;
    return month === 12;
  });

console.log(filteredData)

let years = filteredData.map(([date]) => date.split('-')[0]);
years = years.reverse();

let closeValues = filteredData.map(([_, entry]) => parseFloat(entry['4. close']));
closeValues = closeValues.reverse();
console.log(closeValues)
const annualReturns = closeValues.map((close, index) => {
    if (index === 0) return 0;
    const previousClose = closeValues[index - 1];
    return (close - previousClose) / previousClose;
  });

const averageReturn = annualReturns.reduce((sum, annualReturns) => sum + annualReturns, 0) / annualReturns.length;

console.log('Average Return :', averageReturn);

const seedDatabase = async () => {
    try {
      // Connect to the MongoDB database
      db.on('connected', async () => {
        console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
      });
  
      // Loop through the arrays and create documents
      for (let i = 0; i < years.length; i++) {
        const year = years[i];
        const value = closeValues[i];
  
        const document = new SP500({
          date: new Date(year),
          value: value,
        });
  
        await document.save();
      }
  
      console.log('Database seeded successfully');
    } catch (error) {
      console.error('Error seeding the database:', error);
    }
  };
  
  // Call the seedDatabase function to start the seeding process
  seedDatabase();


  //Send average return to expected return on frontend