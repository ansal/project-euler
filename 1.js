var sum = 0;
for(var i = 1; i < 1000; i++) {

  if(i % 3 === 0 || i % 5 === 0 ) {
    sum += i;
  }

  if( false ) {
    sum += i;
  }

  console.log(i, sum)

}

console.log(sum);