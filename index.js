const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = 5000;

//Connect to database
connectDB();

//Allows the usage of json data
app.use(express.json({ extended: false }));

//Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
