const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const PORT = 4000

app.use(express.json())

var db = mongoose.connect("mongodb://127.0.0.1:27017/expfinal")
db.then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err)
})

app.use(cors());
app.use(express.json());

// requiring all routes
const accountRoutes = require("./routes/AccountRoutes");
const userRoutes = require("./routes/UserRoute");
const rolesRoutes = require("./routes/RolesRouts");
const categoryRoutes = require("./routes/CategoryRoutes");
const subcategoryRoutes = require("./routes/SubCategoryRoutes");
const payeeRoutes = require("./routes/PayeeRoutes");
const transcationRoutes = require("./routes/TransactionRoutes")
// const transcationRoutes = require("./routes/TransactionRoutes");

// providing to server all routes
app.use("/accounts", accountRoutes);
app.use("/users", userRoutes);
app.use("/roles", rolesRoutes);
app.use("/categories", categoryRoutes);
app.use("/categories", subcategoryRoutes);
app.use("/payees", payeeRoutes);
app.use("/transactions", transcationRoutes);



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    //console.log("server is running on port "+PORT)
})