const express = require('express');
const app = express();
const cors = require('cors');
const Sequelize = require('sequelize');

require('pg');

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const confessionRouter = require('./routes/Confessions');
app.use('/confessions', confessionRouter);

db.sequelize.sync().then(() => {

    app.listen(process.env.PORT || 4004, () => {

        console.log('Server running');
    });
}).catch((err) => {

    console.log(err);
});
