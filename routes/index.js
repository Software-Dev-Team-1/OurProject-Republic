const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome',{
    my_title: 'Login',
    local_css:"main.css"
  })
);  //initial


// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user,
    my_title: 'Home',
    local_css:"main.css"
  })
);

// Candidates
router.get('/candidate_info', ensureAuthenticated, (req, res) =>
  res.render('candidate_info', {
    user: req.user,
    my_title: 'Candidates',
    local_css:"candidate.css"
  })
);

//Polls
router.get('/polls', ensureAuthenticated, (req, res) =>
  res.render('polls', {
    user: req.user,
    my_title: 'Polls',
    local_css:"main.css"
  })
);

//Votes
router.get('/votes', ensureAuthenticated, (req, res) =>
  res.render('votes', {
    user: req.user,
    my_title: 'Votes',
    local_css:"main.css"
  })
);

//Votes
router.get('/events', ensureAuthenticated, (req, res) =>
  res.render('events', {
    user: req.user,
    my_title: 'Events',
    local_css:"main.css"
  })
);

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;
