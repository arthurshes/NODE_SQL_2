const express = require('express'),
app = express()
require('dotenv').config()
const postsRouter = require('./routes/postsRouter')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/v1/posts',postsRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log('Server listen port '+PORT)
})