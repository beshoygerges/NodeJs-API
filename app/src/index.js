const express = require("express")
const postController = require('./controller/PostController')
const bodyParser = require('body-parser')
const envProperties = require('dotenv')
const mongoose = require('mongoose')
const morgan = require('morgan')

envProperties.config()

const app = express()
const PORT = process.env.PORT || 3000

//http request logger
app.use(morgan('tiny'))

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use(bodyParser.json())


// connect to mongo DB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
});

app.get('/api/posts/', postController.getAllPosts)

app.post('/api/posts/', postController.addPost)

app.listen(PORT, console.log(`server is up on port ${PORT}`))