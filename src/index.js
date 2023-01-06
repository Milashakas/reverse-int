module.exports = function reverse (n) {
let num=Math.abs(n);
let string=num.toString().split('').reverse().join('');
  return Number(string)
}
