const express = require('express');
const router = express.Router();
const { Confessions, Sequelize } = require('../models');
const profanity = require('@2toad/profanity').profanity;

// HTTP GET request
router.get('/', async (req, res) => {

    let list = [];

    // Retrieve 3 random confessions from database
    const listOfConfessions = await Confessions.findAll({ order: Sequelize.literal('RANDOM()'), limit: 3 });

    // For each confession, remove unnecessary information
    listOfConfessions.forEach(confession => {

        list.push({

            'confessionText': confession.confessionText
        });
    });

    // Return confession list to frontend
    res.status(200).json(list);
});

// HTTP POST request
router.post('/', async (req, res) => {

    const input = req.body;

    // For each user input, censor profanity if there is any
    input.confessionText = profanity.censor(input.confessionText);

    // Add user input into database if it is unique
    await Confessions.findOrCreate({

        where: {

            confessionText: input.confessionText
        },
        default: input
    });

    // Return success status
    res.status(200).json(input);
});

module.exports = router;