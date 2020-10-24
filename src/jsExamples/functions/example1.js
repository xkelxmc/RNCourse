function add2(number) {
    return number + 2;
}

const add3 = (number) => {
    return number + 3;
}

console.log([0, 42, 100].map(add2))
// 2, 44, 102

console.log([0, 42, 100].map((num) => num + 5))
// 5, 47, 105
