const express = require('express');
const cors = require('cors')
const logger = require('./app/config/app.logging')
const app = express();

// let corsOptions = {
//     origin: "http://localhost:8081"
// }

app.use(cors(
    // corsOptions
    ))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 8080)

const db = require("./app/models")

db.mongoose.connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(() => {
        logger.info("Connected to mongo-db database")
    }).catch(err => {
        logger.error("Cannot connect to the database", err)
        process.exit();
    })


app.get('/', (req, res, next) => {
    res.send('<h1>Hello world<h1>');
})

require("./app/routes/user.routes")(app)

app.listen(app.get('port'), () => {
    logger.info(`Server listen on port ${app.get('port')}`);
})