
const game = () =>{
    pScore = 0;
    cScore = 0;

    const match= () =>{
        const options=document.querySelectorAll(".options button");       //initalising step 1
        const playerHand=document.querySelector(".playericon");
        const computerHand=document.querySelector(".computericon");
        //console.log()

        // array 
        const arr=["stone","paper","scissor"];
        const randomNumber= Math.floor(Math.random() *3);
        

        

       // for picking the buttons 
        options.forEach(options => {
            options.addEventListener("click" , function(){

                const computerNumber= Math.floor(Math.random() *3);         //random computer value generation  
                const computerChoice=arr[computerNumber];
                // call comparision
                comparision(computerChoice,this.textContent);
                

                // updating images
                computerHand.src =`./png/${computerChoice}.png`;
                playerHand.src   =`./png/${this.textContent}.png`;
                 
                //updating score
                updation();
                reset();
                
               // reset();

                          
            
            
                

            });  // close tag for eventelisterner funtion.
        });// close tag for the forEach options.
        

    }



        const comparision = (computerChoice, playerChoice)  => {
            const message = document.querySelector("h1")

                       // FOR TIE
            if(computerChoice === playerChoice){
               message.textContent = "IT'S A TIE";                        // tie statement  
               return;
            }
            
                       //FOR STONE

            if(computerChoice === "stone"){
                if(playerChoice === "paper"){
                    message.textContent = "PLAYER WINS";
                    pScore++;
                    return;                                              // for stone
                }
                else{
                    message.textContent = "COMPUTER WINS";
                    cScore++;
                }  
            }  

                     // FOR PAPER
            
            if(computerChoice === "paper"){
                if(playerChoice === "scissor"){
                     message.textContent = "PLAYER WINS";
                     pScore++;                                            // for paper
                     return;  
                }
                else{
                message.textContent = "COMPUTER WINS";
                cScore++
                }  
            }
            
                    // FOR SCISSOR
            
            if(computerChoice === "scissor"){
                if(playerChoice === "paper"){
                    message.textContent = "COMPUTER WINS";
                    cScore++;                                             // for scissor
                    return;  
                }
                else{
                    message.textContent = "PLAYER WINS";
                    pScore++;
                    return;
                }  
            }  



           

        }
    
    match();
    const updation = () => {
        const computerScore = document.querySelector(".computer-score p");
        const playerScore = document.querySelector(".player-score p");
        computerScore.textContent = cScore;
        playerScore.textContent = pScore;
        
    } 
    
    
    const reset = () => {
        const resetButton = document.querySelector("button.resetgame")
        resetButton.addEventListener("click", function(){
            pScore = 0;
            cScore = 0;
            console.log(pScore,cScore);
            updation();
            

        });

    }


//reset();
}
game();

