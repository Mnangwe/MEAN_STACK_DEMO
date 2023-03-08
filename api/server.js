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

const db = require("./app/models")

db.mongoose.connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(() => {
        console.log("Connected to mongo-db database")
    }).catch(err => {
        console.log("Cannot connect to the database", err)
        process.exit();
    })


app.get('/', (req, res, next) => {
    res.send('<h1>Hello world<h1>');
})

require("./app/routes/user.routes")(app)

app.listen(app.get('port'), () => {
    console.info(`Server listen on port ${app.get('port')}`);
})