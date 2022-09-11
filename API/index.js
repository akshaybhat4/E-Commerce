const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/User");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/Product");

dotenv.config();
var cors = require('cors');
app.use(cors());

mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connected"))
.catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);


app.listen(process.env.PORT || 5000, ()=>{
    console.log("Hello");
});