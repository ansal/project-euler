function collatzCount (num) {
  
  var count = 0;

  while( num !== 1) {

    if(num % 2 === 0) {
      num = num / 2;
    } else {
      num = 3 * num + 1;
    }

    count++;

  }

  return ++count;

}

var largest = 0;
for(var i = 13; i < 1000000; i++) {

  var count = collatzCount(i);
  if(count > largest) {
    largest = count;
    console.log(i, largest);
  }

}