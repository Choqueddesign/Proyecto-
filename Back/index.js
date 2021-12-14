const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());

 const puerto  = 3030;

app.listen(puerto,()=>{
    console.log("Estoy escuchando en http://localhost:" + puerto);
});