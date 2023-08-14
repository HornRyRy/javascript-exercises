const sumAll = function(firstInt, lastInt) {
    let bigInt = 0
    let smallInt = 0
    if(firstInt < 0 || lastInt < 0){
        return 'ERROR'
    }else if(!Number.isInteger(firstInt) || !Number.isInteger(lastInt)){
        return 'ERROR'
    }else if(lastInt >= firstInt){
        bigInt = lastInt
        smallInt = firstInt
    }else if(lastInt < firstInt){
        bigInt = firstInt
        smallInt = lastInt
    }else{
        return 'ERROR'
    }

    let intArray = []
    let sum = 0
    for(i = smallInt; i <= bigInt; i++){
        intArray.push(i)
    }
    intArray.forEach((element) =>[
        sum = sum + element
    ])

    return sum
};

let x = sumAll(1, 100)
console.log(x)

// Do not edit below this line
module.exports = sumAll;
