//      USER INPUT: vanilla,vanilla,vanilla,strawberry,coffee,coffee

let userAnswer = prompt(`Please enter a list of comma-separated froyo flavors`)
// console.log(userAnswer);

const froyoFlavors = userAnswer.split(',');

// console.log(froyoFlavors);


const flavorObjects = {}

// console.log(flavorObjects);

const froyoFlavorsDetectingMachine = (userInputedFlavors) => {

    for (let i = 0; i < userInputedFlavors.length; i++) {

        let flavorBeingLooped = userInputedFlavors[i]
        // console.log(flavorBeingLooped);

        if (flavorObjects[flavorBeingLooped]) {
            flavorObjects[flavorBeingLooped] += 1
        } else {
            flavorObjects[flavorBeingLooped] = 1
        }
    }
    return flavorObjects;
}

console.log(froyoFlavorsDetectingMachine(froyoFlavors));


