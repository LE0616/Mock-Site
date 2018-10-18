const router = require('express').Router()
const { Student, Campus } = require('../db/index')


// GET /api/students
router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

// GET /api/students/:studentId
router.get('/:studentId', async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.studentId, {
      include: [{model: Campus}]
    });
    res.json(student);
  } catch (err) {
    next(err);
  }
});

//POST /api/students
router.post('/', async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.json(student)
  } catch (err) {
    next(err)
  }
})

//DELETE /api/students/:studentId
router.delete('/:studentId', async (req, res, next) => {
  try {
    const id = req.params.studentId;
    await Student.destroy({
      where: {
        id: id
      }});
    res.status(204).send('Student was removed successfully!');
  } catch (err) {
    next(err);
  }
})

//PUT-UPDATE /api/campuses/:campusId
router.put('/:studentId',async (req, res, next) => {
  try {
    const studentToUpdate = await Student.findById(req.params.studentId);
    await studentToUpdate.update(req.body);
    res.status(204).send('Student updated!');
  } catch (err) {
    next(err);
  }
})

module.exports = router;
