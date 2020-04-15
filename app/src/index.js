const express = require("express")
const postController = require('./controller/PostController')
const envProperties = require('dotenv')
const mongoose = require('mongoose')
const morgan = require('morgan')

envProperties.config()

const app = express()
const PORT = process.env.PORT || 3000

//http request logger
app.use(morgan('tiny'))

// connect to mongo DB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
});

app.get('/api/posts/', postController.getAllPosts)

app.listen(PORT, console.log(`server is up on port ${PORT}`))