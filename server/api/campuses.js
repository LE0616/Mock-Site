const router = require('express').Router()
const {Campus} = require('../db/index')

// GET /api/campuses
router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});
// GET /api/campuses/:campusId
router.get('/:campusId', (req, res, next) => {
    Campus.findById(req.params.campusId, {
      include: [{Model: 'Student'}]
    })
      .then(campus => res.json(campus))
      .catch (next);
});

module.exports = router;
