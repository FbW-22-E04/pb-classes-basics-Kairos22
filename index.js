const now = new Date();
const test = new Date();

// 1
console.log(now);
console.log('-----------------------------1');
// 2
console.log(typeof now);
console.log('-----------------------------2');
// 3
console.log(Date);
console.log('----------------------------3');
// 4
console.log(typeof Date);
console.log('--------------------------4');
// 5
// it returns date.
console.log('-----------------------------5');
// 6
// returns current date.
console.log('------------------------------6');
// 7
console.log(new Date()); // returns current date.
console.log('-----------------------------7');
// 8
if (now) {
    console.log('now is truthy');
} else {
    console.log('now is falsy');
}
// now is truthy
console.log('---------------------------8');
// 9
console.log(now === test);
// ====> false
// because they're objects.
console.log('----------------------------9');
// 10
console.log(now === Date);
// ====> false
console.log('----------------------------10');
// 11
console.log(now === new Date());
// ====> false
console.log('-----------------------------11');
// 12
console.log(new Date() === new Date());
console.log('----------------------------12');
// ====> false
// because they're objects.