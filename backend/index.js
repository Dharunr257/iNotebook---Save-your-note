const connectToMongo = require("./db")
const express = require('express')
connectToMongo();
var cors = require('cors') 

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port, () => {
  console.log(`ENotebook backend listening on port http://localhost:${port}`)
}) 