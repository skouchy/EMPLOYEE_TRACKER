const express = require('express');
const db = require('./db/connection');
const inquirer = require('inquirer');
const apiRoutes = require('./routes/apiRoutes');


const app = express();
const PORT = process.env.PORT || 3001;


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/api', apiRoutes);



// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});


db.connect(err => {
    if (err) throw err;
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});