const { createLogger, format, transports } = require('winston')


const logger = createLogger({
    level: 'debug',
    format: format.combine(format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }), format.json()),
    transports: [
        new transports.File({
            filename: "error.log",
            level: "error"
        }),
        new transports.Console(),
    ]
})

module.exports = logger