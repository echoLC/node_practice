const { EventEmitter } = require('events')
module.exports = class Connection {
    // ##BEGIN## 代码已加密
    constructor () {
       this.event = new EventEmitter()
       this.callbacks = []

       this.event.on('connection', (...args) => {
            this.run(...args)
        })
    }

    onConn (fn) {
        this.callbacks.push(fn)
    }

    connection (...args) {
        this.event.emit('connection', ...args)
    }

    run (...args) {
        this.callbacks.forEach(cb => {
            if (typeof cb === 'function') {
                cb(...args)
            }
        })
    }
    // ##END##
}
