const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Abhi:<password>@cluster0.raimtq9.mongodb.net/grabit?retryWrites=true&w=majority'

const mongoDB = () => {
    mongoose.connect(mongoURI, {useNewUrlParser: true})
    .then(() =>{
        console.log("Connected");
        const fetchedData = mongoose.connection.db.collection("food_items");
        // console.log("Data");
       return fetchedData.find({}).toArray();
    })
    // .then((data) =>{
    //     console.log("Data :-",data);
    // })
    .catch((error) =>{
        console.log('Error connecting to MongoDB', error.message);
    });
}

module.exports = mongoDB;