const express= require('express')
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json())
require('dotenv').config()
const dbConfig = require('./config/dbConfig')




const userRoute = require('./routes/userRoute')
app.use('/api/users' , userRoute) 

const movieRoute = require('./routes/movieRoute')
app.use('/api/movies' , movieRoute)

const theatreRoute = require('./routes/theatreRoute')
app.use('/api/theatres' , theatreRoute)

const upcomingRoute = require('./routes/upcomingRoute')
app.use("/api/upcoming", upcomingRoute);


const bookingroute = require('./routes/bookingRoute')
app.use("/api/bookings", bookingroute);


const path = require("path");
__dirname = path.resolve();


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
  }
  




app.listen(8082 , ()=>{
    console.log('Server is Running')
})