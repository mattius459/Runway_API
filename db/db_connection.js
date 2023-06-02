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
const remoteMongoURI = "mongodb+srv://mattahlborg:3Nn0B7JBPJdrnHPX@cluster0.imd58mm.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(remoteMongoURI, mongooseConfig)
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(err => console.log("Connection Failed.", err));

export default db