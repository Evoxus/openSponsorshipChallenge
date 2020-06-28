const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  basicInfo: {
    name: String,
    sports: Array,
    nationality: String,
    gender: String,
    dob: Date,
  },
  about: {
    description: String,
    location: String,
    team: String,
    association: String,
    interests: String,
    charities: String,
    pets: String,
    married: String,
    drinks: String,
  },
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String,
    youtube: String,
    twitch: String,
    snapchat: String,
  },
});

module.exports = profileSchema;