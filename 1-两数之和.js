/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [] 
    var length = nums.length
    for(let i = 0; i < length - 1; i++){
        for( let j = i + 1; j < length; j++){
            if( nums[i] + nums[j] === target ){
                result.push(i,j)
                return result
            }  
        }
    }
    return -1
};