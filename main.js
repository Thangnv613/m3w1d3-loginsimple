const http = require('http');
const { resolve } = require('path');
const { listeners } = require('process');
http.createServer(function(req, res) {
    let text = ""
    if(req.url === "/login") {
        text = "login success ";
    }else{
        text = "login failure   ";
    }
res.end(text);
}).listen(8080,'localhost')