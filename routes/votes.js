const express = require('express');
const router = express.Router();
// Load form model
const vote = require('../models/Votes');

//Votes
router.post('/votes', (req, res) => {
  const { email, vote_bloomberg, vote_biden, vote_buttigieg, vote_klobuchar, vote_sanders, vote_warren } = req.body;
  let errors = [];

  if (vote_bloomberg != true && vote_biden != true && vote_buttigieg != true && vote_klobuchar != true && vote_sanders != true && vote_warren != true) {
    errors.push({ msg: 'Please select a Candidate to Vote' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      email,
      vote_bloomberg,
      vote_biden,
      vote_buttigieg,
      vote_klobuchar,
      vote_sanders,
      vote_warren
    });
  }
});

// Login
router.post('/post-votes', function(req,res){
  db.then(function(db){
    db.collection('votes').insertOne(req.body);
  })
});



module.exports = router;
