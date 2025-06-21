const express = require("express")
const app =  express()
const  cors = require("cors")
const dotenv  = require("dotenv")
dotenv.config()
const bodyParser = require("body-parser")
const connectDatabase = require("./utility/connectData")
const authRouter = require("./Routes/authRouter")

const { MongoClient } = require('mongodb');
const categoryRouter = require("./Routes/categoryRouter")
const productRouter = require("./Routes/productRouter")
const customerRouter = require("./Routes/customerRouter")
const orderRouters = require("./Routes/orderRouter")
const { default: settingRouter } = require("./Routes/settingRouter")
const cookieParser = require("cookie-parser");
const path = require("path");
const port = process.env.port

app.use(express.json())
app.use(cookieParser()); // <-- Required for reading cookies
app.use(bodyParser.json())

app.use(cors(
    {
    origin: "http://localhost:5173", 
    // origin: "*", 
    credentials: true
}
))


// Connect  mongodb 
connectDatabase().catch(err=> console.log(err.message))

// MongoDB URI
const uri = "mongodb://localhost:27017"; // তোমার URI অনুযায়ী পরিবর্তন করো
const client = new MongoClient(uri);



app.use("/api/v1/auth", authRouter)
app.use("/api/v1/category", categoryRouter)
app.use("/api/v1/products", productRouter)
app.use("/api/v1/customers", customerRouter)
app.use("/api/v1/orders", orderRouters)
app.use("/api/v1/settings", settingRouter)
// Make everything inside /public accessible via URL
app.use(express.static(path.join(__dirname, "public")));


// Routes
app.get('/', (req, res) => {
  res.send('Hello from Express + Vercel');
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
})
