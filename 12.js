function sumofn (count) {
  var sum = 0;
  for(var i = 1; i <= count; i++) {
    sum += i;
  }
  return sum;
}

function findFactors(num) {

  var factors = 0;

  for(var i = 1; i < Math.sqrt(num); i++) {

    if(num % i === 0) {
      factors++;
    }

  }

  factors *= 2;

  return factors;

}

var i = 1;
var sum = 0;
var factors = [];
var largest = 0;
while(true) {

  sum = sumofn(i);
  factors = findFactors(sum);
  if(factors >= 500) {
    console.log(sum);
    break;
  }

  if(factors > largest) {
    largest = factors;
    console.log(largest);
  }

  i++;

}