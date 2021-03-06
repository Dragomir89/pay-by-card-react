const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser())

require('./routes/bildingRoutes')(app)

app.use(express.static('client/build')) 

const path = require('path')
app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('server listen on port: ' + PORT)
})
