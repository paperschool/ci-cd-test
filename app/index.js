
const morgan = require('morgan');

const express = require("express");

const app = express();

const PORT = 3000;

const ejs = require('ejs');

const fs = require('fs');

const indexPage = fs.readFileSync(__dirname+'/../src/index.ejs', 'utf-8');

app.listen(PORT, () => {
    console.log(`Server Listening on Port ${[PORT]}`);
})

app.use(morgan('dev'));

app.get('/',(req,res) => {
    res.send(indexPage);
});

