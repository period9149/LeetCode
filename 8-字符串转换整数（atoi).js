var myAtoi = function(str) {
    if(isNaN(parseInt(str,10))){
        return 0
    }else if((parseInt(str,10) < -2147483648)){
        return -2147483648
    }else if((parseInt(str,10) > 2147483647)){
        return 2147483647
    }else{
        return parseInt(str,10)
    }
};
console.log(myAtoi("-91283472332"))