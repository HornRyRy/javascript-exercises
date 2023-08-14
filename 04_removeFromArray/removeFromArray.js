const removeFromArray = function(array, ...args) {
    let someArray = []
    array.forEach((element) =>{
        if(!args.includes(element)){
            someArray.push(element)
        }
    })
    return someArray;
};

let userArray = [6, 3, 83, 47]
let modArray = removeFromArray(userArray, 47)
console.log(modArray)





// Do not edit below this line
module.exports = removeFromArray;
