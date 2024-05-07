


function guess(){
    let x = Math.floor((Math.random()*10) + 1)
    console.log(x);
    let number = parseInt(prompt('Guess a number between 1 to 10'));

    if (number != x){
      let y = document.getElementById("number-el")  
      y.textContent = x
    }

    else if(number === x){
        let y = document.getElementById("number-el")
        y.textContent = x + " You have won the game"
    }

   
}




