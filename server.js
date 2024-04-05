const express= require('express');

const server = express();

server.get('/',(req,res)=>{
    res.send('<h1> fala aí manosJS</h1>')
})

server.get('/sobre',(req,res)=>{
    res.send('<h2>Somos quem amamos</h2>');
})

server.get('/jsom',(req,res)=>{
    res.send({'nome':'tudo nosso'});
})

server.use((req,res)=>{
//res.send("erro mano!")
res.status(404).send("caralho mano vc é um merda")
})
server.listen(3000);