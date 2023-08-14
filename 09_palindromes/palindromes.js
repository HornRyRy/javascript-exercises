const palindromes = function (userString) {
    userString = userString.split(" ").join("")
    let cleanString = userString.split("").reverse().join("")
    return userString == cleanString

};

// Do not edit below this line
module.exports = palindromes;
