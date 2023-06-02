import BobData from './data/userCredentialSeedData.json' assert { type: 'json' };
import userCredentialsModel from '../models/userCredentialsModel.js';
import BobFinancialData from './data/userFinancialSeedData.json' assert { type: 'json' };
import userFinancialDataModel from '../models/userFinancialDataModel.js';
import db from './db_connection.js'
import userFinancialData from '../models/userFinancialDataModel.js';

db.on('connected', async () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
});

//Create 

// Map through the raw data from the json
const BobFinancialSeedData = BobFinancialData.map(user => {
    return {

        Age: user.Age,
        MNI: user.MNI,
        MS: user.MS,
        TA: user.TA,
        ER: user.ER,
        EI: user.EI,
        EEA: user.EEA,
        LE: user.LE
    };
});

//Clear collection and seed new
await userFinancialDataModel.deleteMany({})
await userFinancialDataModel.insertMany(BobFinancialSeedData);

//Get _id from newly creadted document and assign to newUserFinancialDataObjectID
let newUserFinancialDataObjectID;
try {
  const documents = await userFinancialData.find({}, '_id');
  newUserFinancialDataObjectID = documents[0]
} catch (error) {
  console.error(error);
}



// Create new document of the userCredentialsModel and include newUserFinancialDataObjectID
const BobSeedData = BobData.map(user => {
    return {
        userEmail: user.userEmail,
        userPassword: user.userPassword,
        userFinancialData: newUserFinancialDataObjectID
    };
});

//Seed
await userCredentialsModel.deleteMany({})
await userCredentialsModel.insertMany(BobSeedData)