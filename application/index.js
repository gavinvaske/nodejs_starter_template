const express = require('express');
require('dotenv').config();

const defaultPort = 3000;
const PORT = process.env.PORT || defaultPort;

const app = express();
app.use('/', require('./routes/index'));

app.listen(PORT, () => {
    console.log(`Server started listening on PORT ${PORT}`);
});