
// Heart click counter function for record updating

 let heartCount = 0;

function countIncrease(id){

    document.getElementById(id).addEventListener('click', function(event){

        event.preventDefault();

        if(event.type === 'click'){
        console.log("Your tricked worked");
        heartCount++;
         }
    
        console.log(heartCount);

        document.getElementById('counting-box').innerText = heartCount;

    })

}


// All the cards calling click counter function for updating the value

countIncrease('card-one');
countIncrease('card-two');
countIncrease('card-three');
countIncrease('card-four');
countIncrease('card-five');
countIncrease('card-six');
countIncrease('card-seven');
countIncrease('card-eight');
countIncrease('card-nine');

// Calling allert & coin reduction function 


function callAlertAndCoinReduction(id){

    document.getElementById(id).addEventListener('click', function(event){

        let coin = document.getElementById('coin-box').innerText;
        let cointNumber = parseInt(coin);
    
        if(event.type === 'click'){

            console.log(alert("You are about to make a call"));
            let remaingCoin = cointNumber - 20;
            cointNumber = remaingCoin;
        }

        document.getElementById('coin-box').innerText = cointNumber;

    })


}

// Calling from every card will show an alert and deduct coin

callAlertAndCoinReduction('card-one-calling');
callAlertAndCoinReduction('card-two-calling');
callAlertAndCoinReduction('card-three-calling');
callAlertAndCoinReduction('card-four-calling');
callAlertAndCoinReduction('card-five-calling');
callAlertAndCoinReduction('card-six-calling');
callAlertAndCoinReduction('card-seven-calling');
callAlertAndCoinReduction('card-eight-calling');
callAlertAndCoinReduction('card-nine-calling');