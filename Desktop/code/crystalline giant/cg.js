// list of abilities that CG already has
const currentAbilities = []

// list of possibilities that CG does not have
let possibleRemaining = ['flying', 'first strike', 'deathtouch', 'hexproof', 'lifelink', 'menace', 'reach', 'trample', 'vigilance', '+1/+1']


// filter list
if(currentAbilities.includes('flying')) {
    let i = possibleRemaining.indexOf('flying')
    possibleRemaining.splice(i, 1)
}

if(currentAbilities.includes('first strike')) {
    let i = possibleRemaining.indexOf('first strike')
    possibleRemaining.splice(i, 1)
}

if(currentAbilities.includes('deathtouch')) {
    let i = possibleRemaining.indexOf('deathtouch')
    possibleRemaining.splice(i, 1)
}

if(currentAbilities.includes('hexproof')) {
    let i = possibleRemaining.indexOf('hexproof')
    possibleRemaining.splice(i, 1)
}

if(currentAbilities.includes('lifelink')) {
    let i = possibleRemaining.indexOf('lifelink')
    possibleRemaining.splice(i, 1)
}

if(currentAbilities.includes('menace')) {
    let i = possibleRemaining.indexOf('menace')
    possibleRemaining.splice(i, 1)
}

if(currentAbilities.includes('reach')) {
    let i = possibleRemaining.indexOf('reach')
    possibleRemaining.splice(i, 1)
}

if(currentAbilities.includes('trample')) {
    let i = possibleRemaining.indexOf('trample')
    possibleRemaining.splice(i, 1)
}

if(currentAbilities.includes('vigilance')) {
    let i = possibleRemaining.indexOf('vigilance')
    possibleRemaining.splice(i, 1)
}

if(currentAbilities.includes('+1/+1')) {
    let i = possibleRemaining.indexOf('+1/+1')
    possibleRemaining.splice(i, 1)
}


// pick random from filtered list
let l = possibleRemaining.length
let rng = Math.floor(Math.random()*l)


// add picked ability to current abilities and log
console.log(possibleRemaining[rng])
currentAbilities.push(possibleRemaining[rng])
console.log(currentAbilities)