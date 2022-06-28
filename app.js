const PORT = process.env.PORT;
console.log(process.env);
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/', require('./routes/index.js'));

app.listen(PORT, () => {
    console.log(PORT);
});
