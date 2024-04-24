require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const resortRouter = require("./routes/resort-routes"); 
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api/resorts", resortRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});