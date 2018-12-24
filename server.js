const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app
   .set('port', PORT)
   .get('/', (req, res) => res.sendFile(path.join(__dirname,'/dist/meus-gastos/index.html')))
   .listen(PORT), () => console.log('Rodando em: ' + PORT); 
