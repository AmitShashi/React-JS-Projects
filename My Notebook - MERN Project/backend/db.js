const mongoose = require('mongoose');

//const mongoURI = "mongodb://localhost:27017/?directConnection=true&tls=false"
//mongoose.set('strictQuery', false);

mongoose.set('strictQuery', true); // added by amit to suppress warnings
const mongoURI = "mongodb+srv://amit:amit@cluster0.6nkx33w.mongodb.net/mynotebook"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {console.log("Connected to Mongo Successfully")})
}

module.exports = connectToMongo;