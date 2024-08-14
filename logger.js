const EventEmitter = require('events')

// console.log(__dirname)
// console.log(__filename)

var url = 'http://mylogger.io/log'

class Logger extends EventEmitter{
    log(message){
        console.log(message)
    
        //cria o evento
        this.emit('mensagemLogged', {id: 1, url: 'http://'})
    }    
}


module.exports = Logger;
// module.exports.endPoint = url;