const express = require('express');
require('dotenv').config();
require('./utils/posgresqlCon');

const usersApiRouter = require('./routes/user');
const postApiRouter = require('./routes/post');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api', usersApiRouter);
app.use('/api', postApiRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});