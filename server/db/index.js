'use strict'

const db = require('./database');
const Campus = require('./Campus');
const Student = require('./Student');

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {

  db,
  Student,
  Campus
}
