const express = require('express');
const mysqlDb = require('../mysqlDb')

const router = express.Router();

const upload = require('./routesConfig');

router.get('/comments', async (req, res) => {
    const [resources] = await mysqlDb.getConnection().query(
        'SELECT id, news_id, author, comment FROM comments');
    res.send(resources);
    return
});

router.get('/comments/:id', async (req, res) => {
    const [resources] = await mysqlDb.getConnection().query(
        `SELECT * FROM comments where id = ?`,
        [req.params.id]);
    res.send(resources[0]);
});


router.post('/comments', async (req, res) => {
    const body = {
        name: req.body.name,
        description: req.body.description,
    };

    const newResources = await mysqlDb.getConnection().query(
        'INSERT INTO comments (name, description) values (?, ?)',
        [body.name, body.description]);

    res.send({
        ...body,
        id: newResources.insertId
    });
    return
});

router.put('/comments/:id', async (req, res) => {
    const body = {
        name: req.body.name,
        description: req.body.description,
    };

    const updateResources = await mysqlDb.getConnection().query(
        'UPDATE comments SET ? WHERE id = ?',
        [{...body}, req.params.id]);

    res.send({
        ...body
    });
    return
});

router.delete('/comments/:id', async (req, res) => {
    try {
        const [resources] = await mysqlDb.getConnection().query(
            `DELETE FROM comments where id = ?`,
            [req.params.id]);
        res.status(204);
    } catch (e) {
        res.status(400).send({"message": e.sqlMessage});
        return
    }
});

module.exports = router;