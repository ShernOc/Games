let calculation ='';
let number = ''
let results; 

let score = JSON.parse(localStorage.getItem('score'))

// Calculator:
function theNumber(number){
   //score = calculation += number
   //get the item for storage 
   
   calculation = calculation + number; 
   score = calculation
   // set the score
   localStorage.setItem('score',JSON.stringify(score))

   // DOM 
    console.log(document.querySelector('.js-calc').innerHTML=`${score}`);

    // storage of calculation 
    
}

// How would you use the local storage: 













