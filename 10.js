function isPrime(num) {

  if( num === 1) {
    return false;
  }

  for(var i = 2; i <= Math.sqrt(num); i++) {

    if (num % i == 0) {
      return false;
    }

  }

  return true;

}

var sum = 0;

for( var i = 2; i <= 2000000; i++) {

  if(isPrime(i)) {
    sum += i;
  }

}

console.log(sum);