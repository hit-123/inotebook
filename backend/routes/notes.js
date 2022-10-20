const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const Notes = require('../models/Notes');

router.get('/fetchallnotes', fetchUser, async (req, res) => {
    const notes = await Notes.find({user: req.user.id});
    res.json()
    res.json(notes)
    res.json([]) 
})

module.exports = router