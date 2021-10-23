const express = require('express');
const mysqlDb = require('./mysqlDb');
const cors = require('cors');
const comments = require('./routes/comments');
const news = require('./routes/news');
const upload = require('./routes/routesConfig')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/', comments);
app.use('/', news);
app.use(upload.array());
const port = 8002;

mysqlDb.connect().catch(e => console.log(e));
app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
});

