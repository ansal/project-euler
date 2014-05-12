
var a = 1;
var b= 1;
var num = 1;
var sum = 0;

while( num < 4000000) {

  if(num % 2 === 0) {

    sum += num;

  }

  num = a + b;
  a = b;
  b = num;

}

console.log(sum);