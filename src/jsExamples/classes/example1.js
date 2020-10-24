class Cat {
    constructor(name) {
        this.name = name
    }

    printName() {
        console.log(this.name)
    }
}

const cat = new Cat("Barsik")
const cat2 = new Cat("Pushistik")

console.log(cat)
// {name: 'Barsik'}

cat.printName(); // Barsik
cat2.printName(); // Pushistik

class Dog extends Cat {
    constructor(name) {
        super('Dog: ' + name);
    }
}

const dog = new Dog('test')

dog.printName(); // Dog: test
