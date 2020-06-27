const express = require ("express");
const app = express();

app.listen(3000, '127.0.0.1', ()=>{
    console.log('servidor rodando!!!');
});

app.get('/', (req,res)=>{
    res.send('ola chat bot');
});

app.get('/pergunta', (req,res)=>{
    console.log(req.query);
    let perg = req.query.texto;
    res.send('Qual sua pergunta? '+ perg);
});

app.get('/mensagem/:tipo', (req,res)=>{
    console.log(req.param);
    let perg = req.param.tipo;
    res.send('Qual a opção? '+ perg);
});
