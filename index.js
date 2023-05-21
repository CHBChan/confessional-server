const express = require('express');
const app = express();
const cors = require('cors');

require('pg');

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const confessionRouter = require('./routes/Confessions');
app.use('/confessions', confessionRouter);

const sequelize = new db.Sequelize(`${process.env.POSTGRES_URL}`);

sequelize.authenticate().complete((err) => {

    if(err) {
        console.log('Connection Error.');
    }
    else {
        console.log('Connection established.')
    }
});

db.sequelize.sync().then(() => {

    app.listen(process.env.port, () => {

        console.log('Server running on port ' + port);
    });
});
