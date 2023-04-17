const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
// TODO: ADD CONSOLE THING?


router.get('/roles', (req, res) => {
    const sql = `SELECT * FROM roles`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Displaying Roles',
            data: rows
        });
    });
});

router.get('/role/:id', (req, res) => {
    const sql = `SELECT * FROM roles WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: `Displaying selected role`,
            data: row
        });
    });
});

router.post('/role', (req, res) => {

});


router.put('/role/:id', (req, res) => {

});



module.exports = router;