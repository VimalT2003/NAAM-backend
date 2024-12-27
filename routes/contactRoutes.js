const express = require('express');
const router = express.Router();
const { saveContact } = require('../controllers/contactController');

// POST endpoint to save contact form data
router.post('/', saveContact);

module.exports = router;
