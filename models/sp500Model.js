import mongoose from 'mongoose';

const sp500Schema = new mongoose.Schema({
  // Define the schema fields based on the structure of the data
  // received from the API
  // For example, if the API response contains "symbol" and "data" fields:
  date: Date,
  value: Number
});

const SP500 = mongoose.model('sp500', sp500Schema);

export default SP500;