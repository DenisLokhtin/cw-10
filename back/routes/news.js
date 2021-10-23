const express = require('express');
const mysqlDb = require('../mysqlDb')

const router = express.Router();

const upload = require('./routesConfig');

router.get('/news', async (req, res) => {
    const [resources] = await mysqlDb.getConnection().query(
        'SELECT id, title, image, publication_date FROM news');
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
        name: req.body.name,
        description: req.body.description,
        locations_id: parseInt(req.body.locations_id),
        categories_id: parseInt(req.body.categories_id),
    };

    if (req.file) {
        body.file = req.file.filename;
    }
    ;

    console.log(req.file);

    const newResources = await mysqlDb.getConnection().query(
        'INSERT INTO news (locations_id, categories_id, name, description, image) values (?, ?, ?, ?, ?)',
        [body.locations_id, body.categories_id, body.name, body.description, body.file]);

    res.send({
        ...body,
        id: newResources.insertId
    });
});

router.put('/news/:id', upload.single('file'), async (req, res) => {
    const body = {
        name: req.body.name,
        description: req.body.description,
        locations_id: req.body.locations_id,
        categories_id: req.body.categories_id,
    };

    if (req.file) {
        body.image = req.file.filename;
    }
    ;

    const updateResources = await mysqlDb.getConnection().query(
        'UPDATE news SET ? WHERE id = ?',
        [{...body}, req.params.id]);

    res.send({
        ...body
    });
});

router.delete('/news/:id', async (req, res) => {
    try {
        const [resources] = await mysqlDb.getConnection().query(
            `DELETE FROM news where id = ?`,
            [req.params.id]);
        res.status(204);
    } catch (e) {
        res.status(400).send({"message": e.sqlMessage});
        return
    }
});

module.exports = router;