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
    console.log('SINGLE STUDENT INSIDE ROUTE', student);
    res.json(student);
  } catch (err) {
    next(err);
  }
});

//POST /api/students
router.post('/', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    console.log('POSTED STUDENT INSIDE ROUTE', student);
    res.json(student)
  } catch (err) {
    res.send(err)
  }
})

//DELETE /api/students/:studentId
router.delete('/:studentId', async (req, res) => {
  try {
    const id = req.params.studentId;
    await Student.destroy({
      where: {
        id: id
      }});
    res.status(204).send('Student was removed successfully!');
  } catch (err) {
    res.send(err);
  }
})

module.exports = router;
