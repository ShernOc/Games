let calculation ='';
let number = ''
let results; 


let score = JSON.parse(localStorage.getItem('score'))

// Calculator:
function theNumber(number){
   //results = calculation += number
   //get the item for storage 
   
   score = calculation += number; 
   // set the score
   localStorage.setItem('score',JSON.stringify(score))

   // DOM 
    console.log(document.querySelector('.js-calc').innerHTML=`${score}`);

    // storage of calcualtion 
    
}

// How would you use the local storage: 













