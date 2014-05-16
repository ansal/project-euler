var fs = require('fs');
var data = fs.readFileSync('13-input.txt', 'utf8');

data = data.split('\n');

var arr = [];

for(var i = 0; i < data.length; i++) {

  arr.push ( parseInt( data[i], 10 ) );

}

var sum = 0;

for(i = 0; i < arr.length; i++) {

  sum += arr[i];

}

console.log(sum);