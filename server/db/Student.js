const Sequelize = require('sequelize');
const db = require('./database');

const Student = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:'https://i.pinimg.com/originals/d9/26/77/d926778ab1b7d23799c2aa6b28b151b9.jpg',
    validate: {
      isUrl: true,
    }
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0.0,
      max: 4.0,
      isDecimal: true //maybe
    }
  }

})

module.exports = Student;
