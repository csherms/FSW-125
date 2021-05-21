const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid');
const bountiesRouter = require('./routes/bountiesRouter');

app.use(express.json())

app.use('/bounties', bountiesRouter)

const PORT = 9000
 

// PORT
app.listen(PORT, () => {
     console.log(`The server is running on port: ${PORT}`)
})