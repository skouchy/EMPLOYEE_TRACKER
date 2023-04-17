const express = require('express');
const router = express.Router();
const db = require('../../db/connection');



router.get('/departments', (req, res) => {
    const sql = `SELECT * FROM departments`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Departments Displayed!',
            data: rows
        });
    });
});

router.get('/department/:id', (req, res) => {
    const sql = `SELECT * FROM departments WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: `Displaying selected department`,
            data: row
        });
    });
});



router.post('/department', (req, res) => {
    // // Query database
    // db.query('SELECT * FROM students', function (err, results) {
    //   console.log(results);
    // });
});



router.put('/department/:id', (req, res) => {

});



module.exports = router;