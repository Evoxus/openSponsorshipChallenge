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
    const profileModel = new Profile();
    const { basicInfo, about, socialMedia } = req.body;
    const newProfile = { basicInfo, about, socialMedia };
    profileModel
      .save(function (err) {
        if (err) {
          return res.send(500, err);
        }
        return res.json(newProfile);
      })
      .catch(next);
  });

profilesRouter.route('/:profileId').patch(jsonBodyParser, (req, res, next) => {
  Profile.findById(req.params.id, function (err, profile) {
    if (err) res.send(err);

    const { basicInfo, about, socialMedia } = req.body;
    const profileUpdate = { basicInfo, about, socialMedia };

    profile.save(function (err) {
      if (err) res.send(err);

      res.json(profileUpdate);
    });
  }).catch(next);
});

module.exports = profilesRouter;
