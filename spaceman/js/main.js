// This is my const area. I created an array of the letters I will be using for the game
// let alphabet =  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// --------CONTSTANTS-----------
const winningWords = ["Pluto", "Venus", "Mars"]


//  -------STATE VARIABLES -------
// Create two different data structures two hold two types of informatiom
// Right: Create an array of strings with letters 
Wrong: 
    
// // Right would be the score. Where are you at so far with choosing the correct letters
// Right -> { P: P','L','U','T','O', 'V','E','N','U','S''M','A','R','S'
    
// // or an array
     
//     ['P','L','U','T','O'] ['V','E','N','U','S'] ['M','A','R','S']
// }

// //  Wrong -> { P: The section of letters that arent correct. From the letters Board

//  }

let right; // Object key of 'p' -> Player; 
let wrong  // (results); // Object key of 'p' -> Values of the correct letters in the index array. 
// let winner; 

// --------CACHED ELEMENTS-------





// EVENT LISTENER
const element = document.getElementById("a");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("letters").innerHTML = "Hello World";
}



// -------Functions---------
init();

// Initialize all state then call render();
function init(); {
    
    
    right = {

    };

    wrong = {

    };

    winner = {
        
    };
    render();

}

function renderRight() {
    for (let key in right) {
     const rightEl = document.getElementById();
    }
}

// Initialize all state, then call render();




// -------INVOKE INIT------------





// -----INVOKE MAIN RENDER ------