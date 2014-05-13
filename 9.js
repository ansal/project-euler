for (var i = 1; i <= 1000; i ++) {

  for (var j = 1; j <= 1000; j++) {

    for(var k = 1; k <= 1000; k++) {

      if( i + j + k === 1000) {

        var a2 = i * i;
        var b2 = j * j;
        var c2 = k * k;

        if(a2 + b2 === c2) {
          console.log('Triplet - ', i, j, k);
          console.log('Product', i * j * k);
        }

      }

    }

  }

}