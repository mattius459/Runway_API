// Packages
import mongoose from 'mongoose'

// Setup database
let db = mongoose.connection
let mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

//Send data to db
const localMongoURI = "mongodb://localhost/";
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(localMongoURI, mongooseConfig)
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(err => console.log("Connection Failed.", err));

export default db