const express = require('express');
const cors = require('cors');
const {connectDB} = require("./db/db");
const app = express();
const {inmuebles} = require("./routes/inmuebles")
connectDB();

app.use(express.json())
app.use('/inmuebles', inmuebles);


const port = 3000
app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})