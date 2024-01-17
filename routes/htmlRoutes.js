const path = require('path');
const router = require('express').Router();

// Serve the notes.html file for the "/notes" route
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Serve the index.html file for all other routes
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
