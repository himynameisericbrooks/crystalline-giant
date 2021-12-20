const ps = require('prompt-sync')
const prompt = ps();

// list of abilities that CG already has
const currentAbilities = []

// list of possibilities that CG does not have
let possibleRemaining = ['flying', 'first strike', 'deathtouch', 'hexproof', 'lifelink', 'menace', 'reach', 'trample', 'vigilance', '+1/+1']

let l = possibleRemaining.length
let rng = Math.floor(Math.random()*l)


function roll() {
    l = possibleRemaining.length
    // console.log('length of possibleRemaining: ' + l)
    // pick random from filtered list
    rng = Math.floor(Math.random()*l)
    
    
    // add picked ability to current abilities and log
    console.log(`
    `)
    console.log("New ability: " + possibleRemaining[rng])
    currentAbilities.push(possibleRemaining[rng])

    // filter list
    if(currentAbilities.includes('flying') && possibleRemaining.includes('flying')) {
        let i = possibleRemaining.indexOf('flying')
        possibleRemaining.splice(i, 1)
    }
    
    if(currentAbilities.includes('first strike') && possibleRemaining.includes('first strike')) {
        let i = possibleRemaining.indexOf('first strike')
        possibleRemaining.splice(i, 1)
    }
    
    if(currentAbilities.includes('deathtouch') && possibleRemaining.includes('deathtouch')) {
        let i = possibleRemaining.indexOf('deathtouch')
        possibleRemaining.splice(i, 1)
    }
    
    if(currentAbilities.includes('hexproof') && possibleRemaining.includes('hexproof')) {
        let i = possibleRemaining.indexOf('hexproof')
        possibleRemaining.splice(i, 1)
    }
    
    if(currentAbilities.includes('lifelink') && possibleRemaining.includes('lifelink')) {
        let i = possibleRemaining.indexOf('lifelink')
        possibleRemaining.splice(i, 1)
    }
    
    if(currentAbilities.includes('menace') && possibleRemaining.includes('menace')) {
        let i = possibleRemaining.indexOf('menace')
        possibleRemaining.splice(i, 1)
    }
    
    if(currentAbilities.includes('reach') && possibleRemaining.includes('reach')) {
        let i = possibleRemaining.indexOf('reach')
        possibleRemaining.splice(i, 1)
    }
    
    if(currentAbilities.includes('trample') && possibleRemaining.includes('trample')) {
        let i = possibleRemaining.indexOf('trample')
        possibleRemaining.splice(i, 1)
    }
    
    if(currentAbilities.includes('vigilance') && possibleRemaining.includes('vigilance')) {
        let i = possibleRemaining.indexOf('vigilance')
        possibleRemaining.splice(i, 1)
    }
    
    if(currentAbilities.includes('+1/+1') && possibleRemaining.includes('+1/+1')) {
        let i = possibleRemaining.indexOf('+1/+1')
        possibleRemaining.splice(i, 1)
    }

    if(possibleRemaining == 0) {
        return console.log(`
        Crystalline Giant has all 10 abilities and has no remaining abilities to roll for. Congratulations!
        `)
    }

    console.log(`
`)
console.log("Current abilities:  " + currentAbilities)
console.log(`Remaining possibilities: ${possibleRemaining}`)
// console.log("random number = " + rng)
console.log(`
`)
}


let input = prompt('Would you like to roll for Crystalline Giant? (y/n) ')
do {
    roll()

    input = prompt('Please enter "y" and press enter when ready to roll again ')
} while (input.toLowerCase() == "y");

console.log('I guess Crystalline Giant is dead or something. Best of luck.')
