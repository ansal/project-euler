// little hacky, but works :)
function isPalindrome(num) {

  var str = num.toString();
  str = parseInt( str.split('').reverse().join('') );

  if(num === str) {
    return true;
  } else {
    return false;
  }

}

var x = 999;
var y = 999;
var largest = 0;

for( var i = x; i >= 1; i--) {

  for(var j = y; j >= 1; j--) {

    var product = i * j;

    if (product > largest) {

      if(isPalindrome(product)) {

        largest = product;

      }

    }

  }

}

console.log(largest);