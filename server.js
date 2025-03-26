const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

// dot env configuartion
// dotenv.config({path: './'})
dotenv.config();


// DB connection
connectDb();

//rest object
const app = express()


// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


// route
// URL => http://localhost:8080
// naming convention  /api/v1/test
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

// port
const PORT = process.env.PORT  || 5500;

// listen
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})