const express = require('express');
require('dotenv').config();

const defaultPort = 3000;
const PORT = process.env.PORT || defaultPort;

const app = express();
app.use('/', require('./controllers/index'));

app.listen(PORT, () => {
    console.log(`Server started listening on PORT ${PORT}. Visit http://localhost:3000 in your browser`);
});