const express = require('express');
const router = require('express').Router();
const { readAndAppend, writeToFile, readFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

// POST Route for submitting notes
router.post('/', (req, res) => {
    const { title, text, } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };
        res.json(response);
    } else {
        res.json('Error in posting feedback');
    }
});

// router.delete('/:id', (req, res) => {
//     const { id } = req.params
//     const notes = JSON.parse()

// })

// readAndAppend(newNote, './db/db.json')

module.exports = router;