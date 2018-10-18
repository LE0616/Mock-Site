const Sequelize = require('sequelize');
const db = require('./database');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://www.andredavisscifi.com/uploads/3/9/5/9/39593389/7659445_orig.jpg',
    validate: {
      isUrl: true,
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Campus;
