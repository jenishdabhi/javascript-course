//Function currying
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 3, 5));

function carry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
const curriedsum = carry(sum);
console.log(curriedsum(2)(3)(5));
