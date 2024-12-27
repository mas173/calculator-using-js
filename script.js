
const decimal = document.querySelector("#decimal");


decimal.addEventListener("click",function(){
var answer = `${display.value}`


  const dec =".";

  
  if(answer.includes(dec)){
    display.value += "";
    console.log(typeof(answer));

  }
  else{
    display.value += "."  }

})

const  display = document.querySelector("input");


