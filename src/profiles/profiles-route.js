const express = require('express');
const profilesService = require('./profiles-service');

const profilesRouter = express.Router();
const jsonBodyParser = express.json();

profilesRouter
  .route('/')
  .get((req, res, next) => {
    if (req.url !== '/') {
      return res.status(400).json({ error: 'NO PARAMS HERE' });
    }
    return profilesService
      .getAllProfiles(req.app.get('db'), req.payload.sub)
      .then((allProfiles) =>
        res.status(200).json(profilesService.cleanProfiles(allProfiles))
      )
      .catch(next);
  })

  .post(jsonBodyParser, (req, res, next) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'missing required content' });
    }
    if (name.trim().length === 0) {
      return res.status(400).json({ error: 'empty string in request body' });
    }

    return profilesService
      .checkIfProfileExists(req.app.get('db'), name)
      .then((check) => {
        if (check.length > 0) {
          return res.status(400).end();
        }
        return profilesService
          .addProfile(req.app.get('db'), name)
          .then((profile) => res.status(201).json(profile))
          .catch(next);
      });
  });

profilesRouter.route('/:profileId').patch(jsonBodyParser, (req, res, next) => {
  const { profileId } = req.params;
  let { name } = req.body;
  name = name.trim();

  if (!Number(profileId)) {
    return res.status(400).send({ error: 'invalid query' });
  }

  if (!name) {
    return res.status(400).send({ error: 'missing content in request body' });
  }

  if (name.length === 0) {
    return res.status(400).send({ error: 'required field empty' });
  }

  return profilesService
    .updateProfile(req.app.get('db'), profileId, name)
    .then((profile) => res.status(200).json(profile))
    .catch(next);
});

module.exports = profilesRouter;
