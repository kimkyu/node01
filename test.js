console.log('filename:', __filename);
console.log('dirname:', __dirname);
console.log('output: %d', 273);
output: 273
console.time('alpha');

var output = 1;
for ( var i = 1; i <= 10; i++) {
     output *= i;
}

console.log('Result:', output);
console.timeEnd('alpha');