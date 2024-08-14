// function sayHello(name){
//     console.log('Hello '+name)
// }

// sayHello('Caio')

// console.log(module)

// const log = require('./logger')
// const path = require('path')
// const os = require('os')
// const fs = require('fs')

// const files = fs.readdirSync('./')
// console.log(files)

// fs.readdir('./', function(err, files){
//     if (err) console.log('Ocorreu um erro', err)
//     else console.log('resultado', files)
// })


// var totalMemory = os.totalmem()
// var freeMemrory= os.freemem()

// console.log(`Total de memória: ${totalMemory}`)
// console.log(`Total de memória livre: ${freeMemrory}`)

// var pathObj = path.parse(__filename)

// console.log(pathObj)

// console.log(logger)

// log('Mensagem qualquer')


// use "jshint app.js" para encontrar onde ocorre o erro do código 


//EVENTO MODULO

// const EventEmitter = require('events')
// const emitter = new EventEmitter()

// //"on" é o mesmo que "addListener"
// // O listener teve ser declarado antes do "emit"
// emitter.on('mensagemLogged', function(){
//     console.log("Listener chamado")
// })

// emitter.emit('mensagemLogged')



//ARGUMENTOS DE EVENTOS 

// const EventEmitter = require('events')
// const emitter = new EventEmitter()

// //"on" é o mesmo que "addListener"
// // O listener teve ser declarado antes do "emit"
// emitter.on('mensagemLogged', (arg) => {
//     console.log("Listener chamado", arg)
// })

// emitter.on('logging', (arg) => {
//     console.log(arg)
// })

// // cria um evento
// emitter.emit('mensagemLogged', {id: 1, url:'http://'})

// emitter.emit('logging', {data: 'minha mensagem'})




// //Extendendo EventEmitter
// const EventEmitter = require('events')

// // é precisamente o modulo 'logger' que emite o evento

// const Logger = require('./logger')
// const logger = new Logger()


// //"on" é o mesmo que "addListener"
// // O listener teve ser declarado antes do "emit"
// logger.on('mensagemLogged', (arg) => {
//     console.log("Listener chamado", arg)
// })

// logger.log("mensagem")


//MODULO HTTP

//Extendendo EventEmitter
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Olá mundo')
        res.end()
    }

    if (res.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]))
        res.end
    }
})

// server.on('connection', (socket) => {
//     console.log('Nova conexão')
// })

server.listen(3000)

console.log('Esperando na porta 3000...')