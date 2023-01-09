const express = require('express');
const cors = require('cors')

const app = express();

let corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 8080) 

app.get('/', (req, res, next) => {
    res.send('<h1>Hello world<h1>');
})

app.listen(app.get('port'), () => {
    console.info(`Server listen on port ${app.get('port')}`);
})