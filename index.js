require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const knex = require("knex")(require("./knexfile"));

const app = express();
const port = process.env.PORT || 8080;

// Import routes
const resortRouter = require("./routes/resort-routes"); 
const signupRouter = require("./routes/signup-routes");
const authRouter = require("./routes/auth-routes");
const profileRouter = require("./routes/profile-routes");
const logbookRouter = require("./routes/logbook-routes");


//middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/resorts", resortRouter);
app.use("/api/signup", signupRouter);
app.use("/api/login", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/logbook", logbookRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});  