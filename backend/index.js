const express = require("express");
const cors = require("cors");
require("./db/conn");
require("dotenv").config();

const app = express();
  
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 4000;

const userRoutes = require("./routes/user.routes");
app.use("/user",userRoutes)

app.listen(port, () => {
    console.log(`Server running At PORT ${port}`);
})       