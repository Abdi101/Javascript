



function getAge(){
    let yearOfBirth = prompt("what is your year of birth?")
    let age = 2022 - yearOfBirth
    if (age < 18){
        console.log("you are minor")
    }
    else if(age >= 18 && age < 36 ){
        console.log("you are youth")
    }

    else {
        console.log("the rest is elders")
    }
    
}
getAge()









