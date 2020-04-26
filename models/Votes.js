const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  vote_bloomberg: {
    type: Boolean,
    required: true
  },
  vote_biden: {
    type: Boolean,
    required: true
  },
  vote_buttigieg: {
    type: Boolean,
    required: true
  },
  vote_klobuchar: {
    type: Boolean,
    required: true
  },
  vote_sanders: {
    type: Boolean,
    required: true
  },
  vote_warren: {
    type: Boolean,
    required: true
  }
});

const Vote = mongoose.model('Vote', VoteSchema);

module.exports = Vote;
