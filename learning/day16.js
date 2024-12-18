//  //Function

//  function functionname1(){
//     console.log(2+2);
//     console.log("Kripesh raj panta");
//  }

//  functionname1()
//  functionname1()

let computerMove = '';
function pickComputerMove(){
    
    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
    } 
    else if (randomNumber >= 1/3 && randomNumber < 2/3 ){
        computerMove = 'paper';
        }
    else if (randomNumber >= 2/3 && randomNumber <1){
    computerMove = 'scissors';
    }

}

