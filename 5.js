var num = 2;
while( true ) {

  for(var i = 1; i <= 20; i++) {

    if(num % i != 0) {
      break;
    }

  }

  if(i === 21) {
    console.log(num);
    break;
  }

  num += 1;

}