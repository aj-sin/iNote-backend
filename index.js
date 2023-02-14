const connectToMongo=require("./db") 
const dotenv=require("dotenv")
const express = require('express')
const cors=require('cors')
//data base connected
connectToMongo()

const app = express()

dotenv.config({path:"./config.env"})
//middlewhere to get the request and to send response between client and backend-database
app.use(express.json())
app.use(cors())

//Available Routes
app.use("/api/auth" , require("./routes/auth"))
app.use("/api/note" , require("./routes/note"))

const port = process.env.PORT || 5000 //so that heroku can set its own port there


// if(process.env.NODE_ENV=="production"){
//   app.use(express.static("Client/build"))
// }

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})