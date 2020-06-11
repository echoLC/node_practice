const { EventEmitter } = require('events')
module.exports = class Connection {
    // ##BEGIN## 代码已加密
    constructor () {
       this.event = new EventEmitter()
    }

    onConn (fn) {
        this.event.on('connection', (msg) => {
            fn(msg)
        })
    }

    connection (msg) {
        this.event.emit('connection', msg)
    }
    // ##END##
}
