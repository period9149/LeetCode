/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString().split('').toString() == x.toString().split('').reverse().toString()
};
var isPalindrome = function(x) {
    var a = x
    var temp = 0
    if( x < 0 || x % 10 == 0){
        return false
    }
    if( x < 10 ){
        return true
    }
    while(x > 0){
        temp = temp * 10 + x % 10
        Math.floor(x /= 10)
    }

    return temp === a
};
isPalindrome(121)