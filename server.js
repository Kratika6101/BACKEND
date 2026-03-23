const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// ✅ Use environment variable for MongoDB
mongoose.connect("mongodb://kratikarajput243_db_user:1234567123@ac-1tburt6-shard-00-00.zhdpyk0.mongodb.net:27017,ac-1tburt6-shard-00-01.zhdpyk0.mongodb.net:27017,ac-1tburt6-shard-00-02.zhdpyk0.mongodb.net:27017/?ssl=true&replicaSet=atlas-13dzk8-shard-0&authSource=admin&appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Routes
app.use("/api/auth", require("./routes/authRoutes"));
console.log("Auth routes loaded");

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Server working");
});

app.get("/health",(req,res)=>{
  res.send("Server is alive");
});

// ✅ Use dynamic port for deployment
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});