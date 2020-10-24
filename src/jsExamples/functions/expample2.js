// function
function Person() {
    this.age = 42;
    setTimeout(function () {
        console.log(this.age); // undefined
    }, 100)
}
const p = new Person();

// arrow function
function Person2() {
    this.age = 42;
    setTimeout(() => {
        console.log(this.age); // 42
    }, 100)
}
const p2 = new Person2();
