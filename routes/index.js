const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));  //initial
//router.get('/', forwardAuthenticated, (req, res) => res.render('home'));


// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

// Candidates
router.get('/candidate_info', ensureAuthenticated, (req, res) =>
  res.render('candidate_info', {
    user: req.user
  })
);

//Polls
router.get('/polls', ensureAuthenticated, (req, res) =>
  res.render('polls', {
    user: req.user
  })
);

module.exports = router;
