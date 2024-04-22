const mongoose = require("mongoose")

// Se conecta a la BD
mongoose.connect("mongodb+srv://qjorgefabian:kW6XM4el1Aa3BePX@cluster0.poak6p5.mongodb.net/")
    .then(() => console.log("Connection to db successful"))
    .catch((error) => console.log("Error establishing connection to db:", error))