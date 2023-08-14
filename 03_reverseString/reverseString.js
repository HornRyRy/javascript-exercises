const reverseString = function(strToReverse) {
    let strArray = strToReverse.split("")
    strArray = strArray.reverse()
    let finString = strArray.join("")
    return finString
};

reverseString('hello there')
// Do not edit below this line
module.exports = reverseString;
