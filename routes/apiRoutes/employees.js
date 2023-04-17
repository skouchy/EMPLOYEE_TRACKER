const express = require('express');
const router = express.Router();
const db = require('../../db/connection');



router.get('/employees', (req, res) => {
    const sql = `SELECT * FROM employees`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'All Employees Displayed!',
            data: rows
        });
    });
});

router.get('/employee/:id', (req, res) => {
    const sql = `SELECT * FROM employees WHERE id = ?`;
    const params = [req.params.id];
    
    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: `Displaying selected employee`,
            data: row
        });
    });
});


router.post('/employee', (req, res) => {
    
});

router.put('/employee/:id', (req, res) => {

});



module.exports = router;