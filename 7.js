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

var num = 2;
var count = 0;

while(true) {

  if(isPrime(num)) {

    count += 1;

    if(count === 10001) {
      console.log(num);
      break;
    }

  }

  num += 1;

}