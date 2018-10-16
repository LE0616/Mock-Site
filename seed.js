const { db } = require('./server/db')
const {green, red} = require('chalk')
const Campus = require('./server/db/Campus')
const Student = require('./server/db/Student')

const campuses = [ {
  name: 'Southern Carbondale',
  imageUrl: 'http://mediad.publicbroadcasting.net/p/wuis/files/styles/x_large/public/201805/old-campus.jpg',
  address: 'Carbondale, IL 62901',
  description: 'SIU IS WHERE BRAINS AND HEART INTERSECT. OUR BEAUTIFUL CAMPUS IS HOME TO MAJOR OPPORTUNITIES IN A NUMBER OF FIELDS. WE WELCOME STUDENTS FROM ALL WALKS OF LIFE FROM AROUND THE WORLD AND PRIDE OURSELVES ON INCLUSIVITY.'
}, {
  name: 'Southern Edwardsville',
  imageUrl: 'http://www.cumuonline.org/wp-content/uploads/2017/05/siue.jpg',
  address: 'Edwardsville, IL 62026',
  description: 'SIUE is a nationally recognized university that provides students with a high-quality, affordable education that prepares them for successful careers and lives of purpose to shape a changing world. Built on the foundation of a broad-based liberal education, and enhanced by hands-on research and real-world experiences, the academic preparation SIUE students receive equips them to thrive in the global marketplace and make our communities better places to live.'
}
];

const id = () => Math.round(Math.random() * campuses.length - 1) + 1;

const students = [ {
  campusId: id(),
  firstName: 'David',
  lastName: 'Jenkins',
  email: 'dave@fakemail.com',
  imageUrl: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1937156_100144123342689_7785414_n.jpg?_nc_cat=105&oh=04961ea1f079d24180f18e053fefcd88&oe=5C6257C5',
  gpa: 2.9

}, {
  campusId: id(),
  firstName: 'Alison',
  lastName: 'Parker',
  email: 'ali@fakemail.com',
  imageUrl: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/42155147_10103562827577147_4393873151512018944_n.jpg?_nc_cat=111&oh=2a3e1f8c78a8dfc6f50f3ecc5aa45c58&oe=5C4AFBFD',
  gpa: 3.4,

}
];


const seed = () =>
  Promise.all(campuses.map(campus => Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student => Student.create(student))
  )
);


const main = () => {
  console.log('Syncing the db...');
  db.sync({force: true})
    .then(() => {
      console.log(green('Seeding the database...'));
      return seed();
    })
    .catch(err => {
      console.error(red('Oh noes! Something went wrong!'))
      console.error(err);
    })
    .then(() => {
      db.close();
      return null;
    })
}
main();
