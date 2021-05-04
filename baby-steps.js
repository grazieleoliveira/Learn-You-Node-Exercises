let input = process.argv


const inputSum = (input) => {
    let sum = 0
    
    for(i = 2; i < input.length; i++){
        sum += parseInt(input[i])
    }

    return sum
}

console.log(inputSum(input))