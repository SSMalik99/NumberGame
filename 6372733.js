const number = Math.floor((Math.random())*10);
// console.log(number);

const playGame = ( i=0 ) => {
    // alert("i'm working");
    if(i<3) {
        let userInput = prompt(`enter any interger between 0 to 10, you have ${3-i} chance.`);

        let userIntInput = parseInt(userInput);

        if(userInput == null) {
            alert("you may leave, bye!");
            
        } else if(userIntInput <= 10 && userIntInput >=0 ) {
            if(userIntInput === number){

                alert("Congratulation you won! Thanks to Play!");

            }else{

                if(userIntInput < number){
                    alert('that was too low');
                }else{
                    alert('that was too high');
                }
                i++;
                playGame(i)
            }
        } else {
    
            alert(`Please enter an integer between 0 to 10, you have ${3-i} chance.`)
            playGame(i);
        }
    }else{
        // document.getElementById('content-body').innerHTML="<div class='alert alert-danger'>Oops you have lost your chance!<small>please refresh to start again</small></div>"
        alert("Oops you have lost your chance!please try again")
    }
    
}


const checkInput = () => {
    let ele = document.getElementById('numberValue');
    console.log('previous value: ',ele.value);
    let rg = /[^0-9]/g
    ele.value = ele.value.replace(rg,'');
    console.log('modified value: ',ele.value)
}