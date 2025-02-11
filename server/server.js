require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require('./router/auth-router');
const connectDb = require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require('./router/contact-router');
const cors = require('cors');

app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:5174',  // Specify the client origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Add the methods that the server should accept
    credentials: true,  // Allow cookies, if you're using them
  };
app.use(cors(corsOptions));
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);


// app.get("/", (req, res) => {
//     return res.status(200).send("Welcome to the MERN Stack Development!");
// })
// app.get("/register", (req, res) => {
//     return res.status(200).send("Welcome to the Registration Page!");
// })
// app.use(errorMiddleware);
const PORT = 5000;
connectDb().then( ()=> {
    app.listen(PORT, (req, res) => {
        console.log(`Server is running at Port: ${PORT}`);
    });
});
