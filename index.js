const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users.js')

const app = express();
const dbfile = require('./connection')

const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res)=>{res.send('Hello Darshan');});

app.listen(PORT, () => console.log(`Server Running on : http://localhost:${PORT}`));