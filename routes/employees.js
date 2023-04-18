
const db = require('../db/connection');


function getEmployees() {
    app.get('/employees', (req, res) => {
        // const sql = `SELECT * FROM employees`;
        const sql = `SELECT employees.*, roles.title AS job_title
    FROM employees
    JOIN roles ON employees.role_id = roles.id`;

        const mgrName = `SELECT employees.*,
    manager_id AS manager_name
    CONCAT('first_name', ' ', 'last_name') INTO manager_id
    FROM employees
    WHERE 'id' = manager_id`;



        db.query(sql, mgrName, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            return res.json({
                message: 'All Employees Displayed!',
                data: rows
            });
        });
    });
};

app.get('/employee/:id', (req, res) => {
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


app.post('/employee', (req, res) => {

});

app.put('/employee/:id', (req, res) => {
    const sql = `UPDATE * FROM employees WHERE`

    CONCAT(first_name, '', last_name)
});



module.exports = { app };