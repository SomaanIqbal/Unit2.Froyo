

// 1.make a prompt where the user can enter the list of froyo flavors
//      USER INPUT: vanilla,vanilla,vanilla,strawberry,coffee,coffee

let userAnswer =  prompt(`Please enter a list of comma-separated froyo flavors`)
// console.log(userAnswer);

// assign the prompt answer/question to a table listing how many of each flavor they have ordered.
// should be 3 vanilla, 2 coffe, and one strawberry froyo

// 2. split the users input string into an array of strings
const froyoFlavors = userAnswer.split(',');

console.log(froyoFlavors);

// 3. an object is used to keep count of how many orders there are of each flavor

const flavorObjects = {}

// console.log(flavorObjects);



// 4. A loop is used to iterate through the array of flavors



// some logic:If strawberry is already a key in the object
// We make the value go up one level
// If not then we have to assign a new key named after the flavor, and the value for the count ticker will be 1.



// 5?. The program correctly counts the number of each flavor in the user's input.




const froyoFlavorsDetectingMachine = (userInputedFlavors) => {


for (let i=0; i<userInputedFlavors.length; i++) {
    
    let flavorBeingLooped = userInputedFlavors[i]
    // console.log(flavorBeingLooped);

    if (flavorObjects[flavorBeingLooped]) {
        flavorObjects[flavorBeingLooped] +=  1
    } else {
        flavorObjects[flavorBeingLooped] = 1
        
    }
    
} 
console.log(flavorObjects);

}

froyoFlavorsDetectingMachine(froyoFlavors);



// 6. The logic for counting the frequencies of elements in an array is organized into a function that returns an object.

// --------------------------------------------------------------------------------------------------------------------------


