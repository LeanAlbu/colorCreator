const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn')
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
   const randomNumber = getRandomNumber();
   console.log(randomNumber);
   document.body.style.backgroundColor = '#'+randomNumber;
   color.textContent = '#'+randomNumber;
});

function getRandomNumber(){
  let hexCode = '';
  while(hexCode.length < 6){
      let iterator = Math.floor(Math.random() * hex.length);
      hexCode += hex[iterator];
  }
  return hexCode;
}
