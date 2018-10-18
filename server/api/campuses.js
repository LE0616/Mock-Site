const router = require('express').Router()
const { Campus, Student} = require('../db/index')

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
router.get('/:campusId', async (req, res, next) => {
  try {
    const campus = await Campus.findById(req.params.campusId, {
      include: [{model: Student}]
    });
    res.json(campus);
  } catch (err) {
    next(err);
  }
});

//POST /api/campuses
router.post('/', async (req, res, next) => {
  try {
    const campus = await Campus.create(req.body);
    res.json(campus);

  } catch (err) {
    next(err);
  }
})

//DELETE /api/campuses/:campusId
router.delete('/:campusId', async (req, res, next) => {
  try {
    const id = req.params.campusId;
    await Campus.destroy({
      where: {
        id: id
      }});
    res.status(204).send('Student was removed successfully!');
  } catch (err) {
    next(err);
  }
})

//PUT-UPDATE /api/campuses/:campusId
router.put('/:campusId',async (req, res, next) => {
  try {
    const campusToUpdate = await Campus.findById(req.params.campusId);
    await campusToUpdate.update(req.body);
    res.status(204).send('Campus updated!');
  } catch (err) {
    next(err);
  }
})


module.exports = router;
