const { db } = require('./server/db')
const {green, red} = require('chalk')
const Campus = require('./server/db/Campus')
const Student = require('./server/db/Student')

const campuses = [ {
  name: 'Whedon Alliance at Sihnon',
  imageUrl: 'http://www.suburbanlion.com/wp-content/uploads/2013/04/serenity1.jpg',
  address: 'Sihnon, Core Planet, Verse',
  description: 'Everything is beutiful and perfect at W.A.S., EVERYTHING, and don\'t bother arguning the point either if you know what\'s good for you. If you are looking for a civilized approach to software this is the only Margaret Hamilton campus worth considering.'
}, {
  name: 'Aplans Maze',
  imageUrl: 'https://vignette.wikia.nocookie.net/tardis/images/b/b7/Maze-of-the-dead_02.jpg/revision/latest?cb=20100426204616',
  address: 'Alfava Metraxis, Dundra Planet 7, Garn Belt',
  description: 'Perfect for the more macabre of student personalities, Aplans Maze, boasts the largest collection of tombs..I mean tomes related to JavaScipt engineering. School Song: Don\'t Turn Around by Ace of Base'
}, {
  name: 'Polaric Modulation Institute of JavaScript',
  imageUrl: 'http://voy.trekcore.com/gallery/albums/1x04/Time_and_Again_051.jpg',
  address: 'Not in the Kalto Province that\'s for sure',
  description: 'Your planet will NOT explode thanks to the life saving techniques you\'ll learn at PMIJ. Not even a time paradox will get you down when you are accepted into this prestigous specialization program.'
}, {
  name: 'Moya',
  imageUrl: 'http://i.imgur.com/fgVMfDn.jpg',
  address: 'Uncharted Territories, ???',
  description: 'A frelling good time'
}, {
  name: 'Natblida Soncha Kapa',
  imageUrl: 'https://i.ytimg.com/vi/tcms2Vdhb04/maxresdefault.jpg',
  address: 'The Ark, Earth Orbit, Mily Way',
  description: 'Do well at N.S.K. and and you are sure to survive...maybe. Fail and the Dean will float you. Ste yui, oso throu daun ageda '
}, {
  name: 'Ishida Li Na Katsumi School of Code',
  imageUrl: 'https://vignette.wikia.nocookie.net/darkmatter/images/0/0f/IshidaHomeworld.jpg/revision/latest?cb=20150816081004',
  address: 'Zairon, Principality of Zairon, C-Sector',
  description: 'Named for our former Empress, Ishida school boasts students known for cunning and ambition. Fiercely competitive personalities strongly encouraged to audition for our HackerWars Team Fonsei against Pyr Academy\'s Seers.'
}
];

const id = () => Math.round(Math.random() * campuses.length - 1) + 1;

const students = [ {
  campusId: id(),
  firstName: 'Latika',
  lastName: 'J. Darkstorm',
  email: 'latika@voyager.com',
  imageUrl: 'http://voy.trekcore.com/gallery/albums/1x04/Time_and_Again_058.jpg',
  gpa: 2.9

}, {
  campusId: id(),
  firstName: 'Angela',
  lastName: 'Stone',
  email: 'angel@drwho.com',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5L6lqnR42RH8A6kbkZN3S8JO4onu0khNoAaUIGX1lX5PA_HSz_w',
  gpa: 2.9,
}, {
  campusId: id(),
  firstName: 'River',
  lastName: 'Tam',
  email: 'river@firefly.com',
  imageUrl: 'https://vignette.wikia.nocookie.net/firefly/images/2/2c/River.jpg/revision/latest?cb=20080301023737',
  gpa: 4.0
}, {
  campusId: id(),
  firstName: 'Indra',
  lastName: 'kom Trikru',
  email: 'indra@the100.com',
  imageUrl: 'http://the100.wdfiles.com/local--files/character:indra/Indra.jpg',
  gpa: 3.7
}, {
  campusId: id(),
  firstName: 'Dominar',
  lastName: 'Rygel XVI',
  email: 'rygel@farscape.com',
  imageUrl: 'https://static.tvtropes.org/pmwiki/pub/images/_rygel_7059.jpg',
  gpa: 2.9
}, {
  campusId: id(),
  firstName: 'Ryo "Four"',
  lastName: 'Tetsuda',
  email: 'four@darkmatter.com',
  imageUrl: 'https://i2.wp.com/www.tv-eh.com/wp-content/uploads/2017/05/170311-darkmatter_ryo_1136.jpg?fit=534%2C800&ssl=1',
  gpa: 3.6
}, {
  campusId: id(),
  firstName: 'Angela',
  lastName: 'Balzac',
  email: 'deva@expelled.com',
  imageUrl: 'http://fc02.deviantart.net/fs70/i/2014/311/3/2/rakuen_tsuihou_angela_balzac_cute_playlist_png_by_otakurenders_service-d85n182.png',
  gpa: 2.7
}, {
  campusId: id(),
  firstName: 'Kyoya',
  lastName: 'Ootori',
  email: 'kyoya@ouranhost.com',
  imageUrl: 'https://i.pinimg.com/originals/85/0d/1f/850d1fb644c84d4a5be0491b6d81d0b4.jpg',
  gpa: 4.0
}, {
  campusId: id(),
  firstName: 'Haruhi',
  lastName: 'Suzumiya',
  email: 'haruhi@melancholy.com',
  imageUrl: 'https://pa1.narvii.com/6126/4a8cf8bf2a19a67667b77f5562c309419c061fc2_hq.gif',
  gpa: 3.7
}, {
  campusId: id(),
  firstName: 'Sucy',
  lastName: 'Manbavaran',
  email: 'sucy@littlewitch.com',
  imageUrl: 'https://vignette.wikia.nocookie.net/p__/images/d/d2/Sucyy.png/revision/latest?cb=20170828163147&path-prefix=protagonist',
  gpa: 4.0
} , {
  campusId: id(),
  firstName: 'Sadao',
  lastName: 'Maou',
  email: 'devil@parttimer.com',
  imageUrl: 'http://images.sgcafe.net/2014/10/719309-maousama0101.jpg',
  gpa: 3.8
} , {
  campusId: id(),
  firstName: 'Shinigami',
  lastName: 'Ryuk',
  email: 'ryuk@deathnote.com',
  imageUrl: 'https://randomc.net/image/DEATH%20NOTE/DEATH%20NOTE%20-%2024%20-%20Large%2025.jpg',
  gpa: 2.6
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
