'use strict';

function hoisted() {
  console.log({ a }); // undefined
  var a = 1;
  console.log({ a }); // 1
}
hoisted();