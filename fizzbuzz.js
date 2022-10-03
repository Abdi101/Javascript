


function fizzBuzz (string1,string2){
    let combinedLength = string1.length + string2.length
    console.log(combinedLength)
    if (combinedLength % 3 == 0 && combinedLength % 5 == 0){
      return "fizzBuzz"
    }
    else if (combinedLength % 5 == 0){
        return "buzz"
    }

    else if (combinedLength % 3 == 0){
        return "fizz"
    }

    else {
        return "number not divisiable by 3 or 5"
    }
}
console.log(fizzBuzz("abdirahman", "ahmed"))
console.log(fizzBuzz("Rolandyehw", "sankara"))






 

