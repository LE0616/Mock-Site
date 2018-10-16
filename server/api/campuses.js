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
    console.log('SINGLE campus INSIDE ROUTE', campus);
    res.json(campus);
  } catch (err) {
    next(err);
  }
});

//POST /api/campuses
router.post('/', async (req, res) => {
  try {
    const campus = await Campus.create(req.body);
    console.log('POSTED CAMPUS INSIDE ROUTE', campus);
    res.json(campus);

  } catch (err) {
    res.send(err);
  }
})

//DELETE /api/campuses/:campusId
router.delete('/:campusId', async (req, res) => {
  try {
    const id = req.params.campusId;
    await Campus.destroy({
      where: {
        id: id
      }});
    res.status(204).send('Student was removed successfully!');
  } catch (err) {
    res.send(err);
  }
})

//PUT-UPDATE /api/campuses/:campusId
router.put('/:campusId',async (req, res) => {
  try {
    const campusToUpdate = await Campus.findById(req.params.campusId);
    await campusToUpdate.update(req.body);
    res.status(204).send('Campus updated!');
  } catch (err) {
    res.send(err);
  }
})


module.exports = router;
