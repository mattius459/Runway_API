import mongoose from 'mongoose';
const { Schema, Types } = mongoose;

const userCredentialsSchema = new mongoose.Schema({
    userEmail: {
        type: String
    },
    userPassword: {
        type: Number
    },
    userFinancialData: {
        type: Schema.Types.ObjectId,
        ref: 'userFinancialData'
      }
});

const userCredentials = mongoose.model('userCredentials', userCredentialsSchema);

export default userCredentials;