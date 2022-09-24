const mongoose = require('mongoose');
const URL = process.env.DATABASE;

mongoose.connect("mongodb+srv://Kaka5611:Kaka5611@cluster0.tqjcw.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connection Sucessful');
}).catch((err) =>{
    console.log(err);
})