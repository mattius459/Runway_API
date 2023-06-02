import mongoose from 'mongoose';

const userFinancialDataSchema = new mongoose.Schema({
    Age: {
        type: Number
    },
    MNI: {
        type: Number
    },
    MS: {
        type: Number
    },
    TA: {
        type: Number
    },
    ER: {
        type: Number
    },
    EI: {
        type: Number
    },
    EEA: {
        type: Number
    },
    LE: {
        type: Number
    }
});

const userFinancialData = mongoose.model('userFinancialData', userFinancialDataSchema);

export default userFinancialData;