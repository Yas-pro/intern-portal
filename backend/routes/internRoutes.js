const express = require('express');
const router = express.Router();
const Intern = require('../models/Intern');

router.get('/', async (req, res) => {
  const interns = await Intern.find();
  res.json(interns);
});

router.post('/', async (req, res) => {
  const newIntern = new Intern(req.body);
  await newIntern.save();
  res.json(newIntern);
});

module.exports = router;
