// function // class

function Animal(name) {
    this.name = name;

    this.getName = function() {
        return this.name;
    }
}

const cat = new Animal('кот');



// class
class Animal2 {
    constructor(name) {
        this.name = name;

    }
}