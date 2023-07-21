// const fs = require('fs');

// fs.writeFile(
//     './hello.txt',
//     'Hello!',
//     function() {
//         console.log('done creating file')
//     }
// );

// require function returns whatever 
// module.exports holds/references 
const daysOfWeek = require('./days-of-week');
const day = daysOfWeek.getWeekday(5);
console.log(global);

const random = require('./random');
for (let i = 0; i < 10; i++) {
//   console.log( random(100, 200) );
}

const circle = require('./circle');
console.log( circle.area(50) );  // 7853.98...
console.log( circle.circumference(75) );  // 471.23...