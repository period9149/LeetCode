/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var result = 0
    var tempStr = ''
    for(var i = 0; i < s.length; i++){
        tempStr = s[i]
        for(var j = i + 1; j < s.length; j++){
            if(tempStr.indexOf(s[j]) !== -1){
                break
            }else{
                tempStr += s[j]
            }
        }
        result = result > tempStr.length ? result : tempStr.length
    } 
    return result
};