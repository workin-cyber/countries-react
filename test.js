const arr = [
    { price: 1 },
    { price: 3 },
    { price: 5 }
]

const sum = arr.reduce((acc, curr) => (acc + curr.price), 0)

console.log(sum)