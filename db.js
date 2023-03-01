const dotenv=require("dotenv")
const mongoose= require("mongoose")

dotenv.config({path:"./config.env"})

// const mongoURI="mongodb://127.0.0.1:27017"//|only for production
const mongoURI=`mongodb+srv://ajitsingh:${process.env.DATABASE}@notter.llgkjyg.mongodb.net/?retryWrites=true&w=majority`//|when deploying use this

mongoose.set('strictQuery', true);

const connectToMongo=()=>{
    mongoose.connect(mongoURI, (err) => {
        if(err) 
        {
            console.log(err) 
        }

        else {console.log("mongdb is connected");
       }
     
    })
}

module.exports= connectToMongo


