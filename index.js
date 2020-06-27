const express = require ("express"); //servidor node para trabalhar com requesiçoes
const bodyParser = require ("body-parser"); // para trabalhar com requisições post

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

app.listen(port, ()=>{
    console.log(`servidor rodando na porta: http://${hostname}:${port}`);
});

app.get('/', (req,res)=>{
    res.send('ola chat bot');
});

app.get('/pergunta', (req,res)=>{
    console.log(req.query);
    let perg = req.query.texto;
    res.send('Qual sua pergunta? '+ perg);
});

app.get('/mensagem/:tipo/:id', (req,res)=>{
    let perg = req.params;
    res.send('Qual a opção? '+ perg.id);
});

app.post('/pedido', (req,res)=>{
    console.log(req.body);
    const prod = req.body.produto;
    const quant = req.body.quantidade;
    const metPagamento = req.body.metodo_pagamento;
    const bebida = req.body.bebida;
    const pedido = {
        prod,
        quant,
        metPagamento,
        bebida
    };

    res.json(pedido);
});