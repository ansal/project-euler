function sumofN(count) {

  var sum = 0;

  for(var i = 1; i <= count; i++) {

    sum += i;

  }

  return sum;

}

function sumofNSquares(count) {

  var sum = 0;

  for(var i = 1; i <= count; i++) {

    sum = sum + (i * i);

  }

  return sum;

}

var sumofn = sumofN(100);


console.log( sumofn * sumofn - sumofNSquares(100) );