const express = require("express");
const app  = express();
const cors = require("cors")

const port = 8000;
require('dotenv').config();

require('./server/config/mongoose.config');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./server/routes/pet.routes")(app)




app.listen(port, () => console.log("The server is all fired up on port 8000"));
