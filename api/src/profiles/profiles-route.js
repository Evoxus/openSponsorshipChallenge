const express = require('express');
const mongoose = require('mongoose');
const Profile = mongoose.model('Profile');

const profilesRouter = express.Router();
const jsonBodyParser = express.json();

profilesRouter
  .route('/')
  .get((req, res, next) => {
    Profile.find(function (err, profiles) {
      if (err) {
        return res.send(500, err);
      }
      return res.send(profiles);
    }).catch(next);
  })
  .post(jsonBodyParser, (req, res, next) => {
    const profile = new Profile();
    const { profile } = req.body;
    profile
      .save(function (err, profile) {
        if (err) {
          return res.send(500, err);
        }
        return res.json(profile);
      })
      .catch(next);
  });

profilesRouter.route('/:profileId').patch(jsonBodyParser, (req, res, next) => {
  Profile.findById(req.params.id, function (err, profile) {
    if (err) res.send(err);

    let { profile } = req.body;

    profile.save(function (err, profile) {
      if (err) res.send(err);

      res.json(profile);
    });
  }).catch(next);
});

module.exports = profilesRouter;
