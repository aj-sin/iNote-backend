const dotenv=require("dotenv")
const mongoose= require("mongoose")

dotenv.config({path:"./config.env"})

const mongoURI=process.env.DATABASE

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


