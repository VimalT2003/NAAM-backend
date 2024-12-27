const Contact = require('../models/Contact');

// Save contact form data
const saveContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate request body
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new contact entry
    const contact = new Contact({ name, email, phone, subject, message });
    await contact.save();

    console.log("contact",contact)

    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting form', error: error.message });
  }
};

module.exports = { saveContact };
