console.log("HI");

console.log("Bye!")

let random = Math.random();
if (random < 0.5) {
    console.log(random, "BBOOYA")
}


// const ageOfYours = prompt('ENTER YOUR AGE');

// if (parseInt(ageOfYours) > 1993) console.log('You lier')
// else if (parseInt(ageOfYours) < 1993) console.log('You too old')
// else if (parseInt(ageOfYours) === 1993) console.log('Hello bro')

const person = {
    firstName: 'Mick',
    lastName: 'Jagger',
    iq: [1, 2, 3, 4]
}


console.log(person['iq'][2])
console.log(person.iq[1])
console.log(person['first' + 'Name'])


const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
const fullAddress = restaurant['address'] + ', ' + restaurant['city'] + ', ' + restaurant['state'] + ' ' + restaurant['zipcode'];

console.log(fullAddress)