var module = require('module');

for (var i = 0; i < 10; i++) {

}

for (i = 0; i < 10; i++) {
}

var letItBe;
var shouldBeLet = 0;
var shouldBeConst = 0;

function mutate() {
  shouldBeLet = 1;
}

var array = ['a', 'b', 'c', 'd'];

for (var letter in array) {
  console.log(letter);
}

var object = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4
};

for (var [key, value] of object.entries()) {
  console.log(key, value);
}

var whileIterator = 10;
while (whileIterator > 0) {
  whileIterator--;
}

var z = 10;
do {
  var a = 0;
  var b = 1;
  a += b;
  console.log(a, b);
} while (z--);

() => {
  var a = 1;

  return () => {
    return _ = _ => _ => _ => _ => _ => { a = 7; };
  }()
}();

() => {
  var a = 1, b = 2, c = 3;

  a++;

  return b + a;
}();

() => {
  for (var i = 0, z = 77; i < 10; i++) {
    setTimeout(() => console.log(i))
  }

  for (var j = 0; j < 10; j++) {
    _.defer(function () {
      console.log(j)
    });
  }

  for (var k = 0; k < 10; k++) {
    console.log(i);
  }
}();

() => {
  var {foo, number} = bar;
  foo = xy;
  number++;
}

