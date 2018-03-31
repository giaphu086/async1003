// let a = 1;
// // a = 2;
// setTimeout(() => {
//     a = 2;
// }, 1000);

// console.log(a);
const fs = require('fs');

// const data = fs.readFileSync('data.txt', { encoding: 'utf8' });

// console.log(data);

fs.readFile('data.txtxxx', { encoding: 'utf8' }, (error, data) => {
    console.log(error);
});
