const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for seed categories
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM seeds;`;
    pool.query(queryText)
        .then((result) => {
            console.log('Got seed categories back from the db');
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`GET error ${queryText}`, error);
            res.sendStatus(500);
        })
});

module.exports = router;