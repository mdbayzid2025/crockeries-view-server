const express = require("express")
const app =  express()
const  cors = require("cors")
const dotenv  = require("dotenv")
dotenv.config()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const connectDatabase = require("./utility/connectData")
const propertyRouter = require("./Routes/propertyRouter")
const authRouter = require("./Routes/authRouter")
const Booking = require("./Schema/BookingSchema")
const { MongoClient } = require('mongodb');
const categoryRouter = require("./Routes/categoryRouter")
const productRouter = require("./Routes/productRouter")
const customerRouter = require("./Routes/customerRouter")
const orderRouters = require("./Routes/orderRouter")
const { default: settingRouter } = require("./Routes/settingRouter")

app.use(express.json())
app.use(cors({
    // origin: "http://localhost:5173", 
    origin: "*", 
    credentials: true
}))
app.use(bodyParser.json())










app.get("/", (req, res)=>{
    res.send("server running")
})



app.get("/booking", async (req, res)=>{
    const result = await Booking.find()
    return result
})

// Connect  mongodb 
connectDatabase().catch(err=> console.log(err.message))

// MongoDB URI
const uri = "mongodb://localhost:27017"; // তোমার URI অনুযায়ী পরিবর্তন করো
const client = new MongoClient(uri);

// // Database & Collection Name
// const dbName = "crockeries-view";
// const collectionName = "test-user";


const dbName = "bayzid-t";
const collectionName = "test-user";


app.get("/test-user", async (req, res)=>{

      try {         
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
    
        const users = await collection.find().toArray();
        
   return res.json(users); // Properly send JSON response
    } catch (error) {
        console.error(error);
    res.status(500).json({ error: "Failed to fetch users" });
    }    
})

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/category", categoryRouter)
app.use("/api/v1/products", productRouter)
app.use("/api/v1/customers", customerRouter)
app.use("/api/v1/orders", orderRouters)
app.use("/api/v1/settings", settingRouter)

app.listen(5000, ()=>{
    console.log("server running with 5000")
})

