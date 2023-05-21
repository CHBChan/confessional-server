const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const confessionRouter = require('./routes/Confessions');
app.use('/confessions', confessionRouter);

db.sequelize.sync().then(() => {

    app.listen(process.env.port, () => {

        console.log('Server running on port ' + port);
    });
});
