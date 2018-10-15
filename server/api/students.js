const router = require('express').Router()
const { Student } = require('../db/index')


router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    res.send(err)
  }
});

router.get('/:studentId', async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId, {
      include: [{model: Campus}]
    });

    console.log('***STUDENT: ',student);
    res.json(student);
  } catch (err) {
    res.send(err)
  }

});

module.exports = router;
