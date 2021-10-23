const express = require('express');
const mysqlDb = require('../mysqlDb')

const router = express.Router();

router.get('/comments', async (req, res) => {
    console.log(req.query.news_id)
    if (req.query.news_id) {
        const [resources] = await mysqlDb.getConnection().query(
            'SELECT id, news_id, author, comment FROM comments WHERE news_id = ?',
            [req.query.news_id]);
        res.send(resources);
        return
    } else {
        const [resources] = await mysqlDb.getConnection().query(
            'SELECT id, news_id, author, comment FROM comments');
        res.send(resources);
        return
    }
});

router.post('/comments', async (req, res) => {
    const body = {
        news_id: req.body.news_id,
        author: req.body.author,
        comment: req.body.comment,
    };

    console.log(body)

    const newResources = await mysqlDb.getConnection().query(
        'INSERT INTO comments (news_id, author, comment) values (?, ?, ?)',
        [body.news_id, body.author, body.comment]);

    res.send({
        ...body,
        id: newResources.insertId
    });
    return
});

router.delete('/comments/:id', async (req, res) => {
    try {
        const [resources] = await mysqlDb.getConnection().query(
            `DELETE FROM comments where id = ?`,
            [req.params.id]);
        res.status(204).send('ok');
        return
    } catch (e) {
        res.status(400).send({"message": e.sqlMessage});
        return
    }
});

module.exports = router;