const obj = {
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
        console.log(this.i, this);
    }
}

obj.b(); // undefined, Window {...} (or the global object)
obj.c(); // 10, Object {...}
