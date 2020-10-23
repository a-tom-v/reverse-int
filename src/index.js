module.exports = function reverse (n) {
    let str = String(n);
    let num = str.split('').reverse().join('');


    return parseInt(num);
}
