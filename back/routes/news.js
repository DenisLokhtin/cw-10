const express = require('express');
const mysqlDb = require('../mysqlDb')

const router = express.Router();

const upload = require('./routesConfig');

router.get('/news', async (req, res) => {
    const [resources] = await mysqlDb.getConnection().query(
        'SELECT id, title, file, publication_date FROM news');
    res.send(resources);
});

router.get('/news/:id', async (req, res) => {
    const [resources] = await mysqlDb.getConnection().query(
        `SELECT * FROM news where id = ?`,
        [req.params.id]);
    res.send(resources[0]);
});

router.post('/news', upload.single('file'), async (req, res) => {
    const body = {
        title: req.body.title,
        content: req.body.content,
    };

    if (req.file) {
        body.file = req.file.filename;
    }
    ;

    const newResources = await mysqlDb.getConnection().query(
        'INSERT INTO news (title, content, file) values (?, ?, ?)',
        [body.title, body.content, body.file]);

    res.send({
        ...body
    });
});

router.delete('/news/:id', async (req, res) => {
    try {
        const [resources] = await mysqlDb.getConnection().query(
            `DELETE FROM news where id = ?`,
            [req.params.id]);
        res.status(204).send('ok');
        return
    } catch (e) {
        res.status(400).send({"message": e.sqlMessage});
        return
    }
});

module.exports = router;