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

function largestPrimeFactor(num) {

  var sqrt = Math.sqrt(num);
  console.log('Sqrt of ', num, ' is ', sqrt);

  var largest = 0;

  for(var i = 3; i <= sqrt; i++) {

    if( num % i == 0 ) {

      if(isPrime(i)) {
        largest = i;
      }

    }

  }

  return largest;

}

console.log(largestPrimeFactor(600851475143))