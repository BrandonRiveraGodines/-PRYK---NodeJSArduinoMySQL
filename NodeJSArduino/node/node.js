const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mysql = require('mysql');

const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);

app.use(express.static('../'));
server.listen(3000, function() {
    console.log('Server escuchando en puerto', 3000);
});

//Serial Communication
const Serialport = require('serialport');
const Readline = Serialport.parsers.Readline;

const port = new Serialport("COM5", {
    baudRate: 9600,
});

const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

parser.on('open', function() {
    console.log('Connection is opened');
})

parser.on('data', function(data) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user:'root',
        password: '',
        database: 'prjctvillanueva'
    });
    console.log(data);
    io.emit('temp', data);
    connection.connect(function(err){
        if(err) throw err;
        console.log("Conected!");
        var sql = "UPDATE temperatura SET temperatura = " + data + " WHERE id = 1";
        console.log(sql);
        connection.query(sql, function(err, result){
            if(err) throw err;
            console.log("1 record update");
        });
        connection.end();
    });

    connection.connect(function(err){
        if(err) throw err;
        connection.query("SELECT temperatura FROM temperatura WHERE id = " + "1", function(err, result, fields){
            if(err) throw err;
            console.log(result[0].temperatura);
            if(result[0].temperatura != null && result[0].temperatura != undefined)
            console.log("1");
            port.write(result);
        });
    });
});

port.on('error', function(err) {
    console.log(err);
})

app.get('/myform', function(req, res) {
    let myText = req.query.mytext;
    //res.send(`Your text ${myText}`);
    //console.log(myText);
    port.write(myText);
    res.setHeader("Location", "http://localhost:3000/NodeJSArduino/");
    io.emit("temp", "Registro");
})