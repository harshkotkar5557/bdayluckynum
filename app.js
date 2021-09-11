const birthdate = document.getElementById('birthdate')
const lucky_number = document.getElementById('lucky_number')
const submit_button = document.getElementById('submit_button')
const result_section = document.getElementById('result_section')


birthdate.value
submit_button.addEventListener('click' ,() =>{
    let totalOfBirthDate = 0
    for(let i=0 ; i< birthdate.value.toString().length;i++){
        let eachValue=birthdate.value.toString().charAt(i) 
        if(eachValue == "-"){
            eachValue ="0"
        }
        let numValue = Number(eachValue)
        totalOfBirthDate += numValue
    }
    let luckyNumber = Number(lucky_number.value)
    if(!luckyNumber){
        return result_section.innerHTML = "Invalid data"
    }if(luckyNumber <= 0){
        return result_section.innerHTML = "Invalid data"
    }
    if(totalOfBirthDate % luckyNumber ===0){
            return result_section.innerHTML = `Your birthdate is lucky 🎂 `
    }else{
            return result_section.innerHTML = `Your birthdate is not lucky 😕`
    }
  
})
