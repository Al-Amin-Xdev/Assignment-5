
// Heart click counter function for record updating

 let heartCount = 0;

function countIncrease(id){

    document.getElementById(id).addEventListener('click', function(event){

        event.preventDefault();

        if(event.type === 'click'){
        heartCount++;
         }
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


// Copy Counting function

 let copyCount = 0;

function copycounting(id){

    document.getElementById(id).addEventListener('click', function(event){

        event.preventDefault();

        if(event.type === 'click'){
        copyCount++;
         }

        document.getElementById('copy').innerText = copyCount;

    })

}

// Copy counter function calling

copycounting('copy-1');
copycounting('copy-2');
copycounting('copy-3');
copycounting('copy-4');
copycounting('copy-5');
copycounting('copy-6');
copycounting('copy-7');
copycounting('copy-8');
copycounting('copy-9');




// Function for adding a new section


let getParent = document.getElementById('parent');

function addCardToList(cardTextId, cardNumberId) {
  
    let getTextCard = document.getElementById(cardTextId).innerText;
    let getNumberCard = document.getElementById(cardNumberId).innerText;

  // Get current time as string
    let datainfo = new Date().toTimeString();

  // Create a new section
    let newsection = document.createElement('section');

  // Add HTML content dynamically using template literals
    newsection.innerHTML = `
    <section class="call-list flex items-center justify-between p-3 shadow-xl mx-2">
      <div class="service-name-number">
        <h1 class="font-bold text-sm">${getTextCard}</h1>
        <p>${getNumberCard}</p>
      </div>
      <div class="time text-xs text-right">${datainfo}</div>    
    </section>
    `;

  // Append the new section to the parent container
    getParent.style.display = "block";
    getParent.appendChild(newsection);

}

// Calling allert & coin reduction function and calling a funtion to add new section

function callAlertAndCoinReduction(id, cardTextId, cardNumberId){

    document.getElementById(id).addEventListener('click', function(event){

        let coin = document.getElementById('coin-box').innerText;
        let cointNumber = parseInt(coin);

        let textfield = document.getElementById(cardTextId).innerText;
        let numberfield = document.getElementById(cardNumberId).innerText;
    
        if(event.type === 'click'){

            console.log(alert(`You are calling to ${textfield}-${numberfield}`));
            let remaingCoin = cointNumber - 20;
            cointNumber = remaingCoin;

        }

        document.getElementById('coin-box').innerText = cointNumber;
        addCardToList(cardTextId, cardNumberId);

        
    })

}

// Calling from every card will show an alert and deduct coin


callAlertAndCoinReduction('card-one-calling', 'card-one-text', 'card-one-number');
callAlertAndCoinReduction('card-two-calling', 'card-two-text', 'card-two-number');
callAlertAndCoinReduction('card-three-calling', 'card-three-text', 'card-three-number');
callAlertAndCoinReduction('card-four-calling', 'card-four-text', 'card-four-number');
callAlertAndCoinReduction('card-five-calling', 'card-five-text', 'card-five-number');
callAlertAndCoinReduction('card-six-calling', 'card-six-text', 'card-six-number');
callAlertAndCoinReduction('card-seven-calling', 'card-seven-text', 'card-seven-number');
callAlertAndCoinReduction('card-eight-calling', 'card-eight-text', 'card-eight-number');
callAlertAndCoinReduction('card-nine-calling', 'card-nine-text', 'card-nine-number');


// Clearing all the call history

document.getElementById('clear').addEventListener('click', function(){

    let parentDisplay = document.getElementById('parent');

    parentDisplay.innerHTML = "";  
    parentDisplay.style.display = "none"


})


// Copying the number to later use

function copytext(button, number){

    let numberfield = document.getElementById(number).innerText;

    document.getElementById(button).addEventListener('click', function(){

        navigator.clipboard.writeText(numberfield);
        alert("Number Cpied " + numberfield);

    })

}

// Calling the copy funtion to copy the number 

copytext('copy-1', 'card-one-number');
copytext('copy-2', 'card-two-number');
copytext('copy-3', 'card-three-number');
copytext('copy-4', 'card-four-number');
copytext('copy-5', 'card-five-number');
copytext('copy-6', 'card-six-number');
copytext('copy-7', 'card-seven-number');
copytext('copy-8', 'card-eight-number');
copytext('copy-9', 'card-nine-number');