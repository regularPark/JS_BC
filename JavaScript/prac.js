const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// numbers.map(function (num) {
//     console.log(num * 2);
// })

const fullNames = [{
    first: 'Albus',
    last: 'Dumbledore'
}, {
    first: 'Harry',
    last: 'Potter'
}, {
    first: 'Hermione',
    last: 'Granger'
}, {
    first: 'Ron',
    last: 'Weasley'
}, {
    first: 'Rubeus',
    last: 'Hagrid'
}, {
    first: 'Minerva',
    last: 'McGonagall'
}, {
    first: 'Severus',
    last: 'Snape'
}];
/**make array */
const newNum = fullNames.map(function (name) {
    return name.first;
})

// const square = (x) => {
//     return x * x;
// }

// console.log(square(2))

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

/**return 값이 밑의 함수처럼 표현식이 한 줄이라면 {} 대신 ()사용하거나 그조차 생략 가능하다  암시적 반환이라고 부름.*/
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

const square = (x) => x * x;

// console.log(rollDie())


// setTimeout(() => {
//     console.log('Hello!')
// }, 3000)

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 1000);

// clearInterval(id)


const smallNums = numbers.filter((n) => {
    return n < 5
})

// console.log(smallNums)

const checkNums = numbers.every((n) => n > 5) // 전부 5이상이면 true, some일 때는 일부만 5이상이어도 true.

// console.log(checkNums)

const total = numbers.reduce((a, b) => a + b, 100) // 100의 위치에 초기값도 설정 가능

console.log(total)

const minimum = numbers.reduce((min, cur) => {
    if (cur > min) return min;
    return cur;
})

console.log(minimum)

const person = {
    firstName: 'Jay',
    lastName: 'Park',
    fullName: function () {
        console.log(`My name is ${this.firstName} ${this.lastName}`)
    },
    fullNames: () => {
        console.log(`My name is ${this.firstName} ${this.lastName}`)
    }, // undefined undefined
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName());
        }, 3000)
    }

    // 왜 출력이 다른가? 화살표 함수는 정규식 표현과는 this를 사용할 때 다른 결과를 가져온다.
}

// person.fullName()
// person.shoutName()

console.log(...numbers)
console.log(...'numbers')

const newNums = [...numbers, ...fullNames]
// console.log(newNums)

let name = 'park'

const names = [...name] // [ 'p', 'a', 'r', 'k' ]
console.log(names) // 생각했던 대로 배열에 나누어져 담겨 출력되긴 함. 취소선이 왜 생기는지?

const cat = {
    name: 'meow',
    weight: 3
}

const catDog = {
    ...cat,
    color: 'gray'
} // { name: 'meow', weight: 3, color: 'gray' }

console.log(catDog)
console.log({
    ...[1, 2, 3, 4]
}) // { '0': 1, '1': 2, '2': 3, '3': 4 }