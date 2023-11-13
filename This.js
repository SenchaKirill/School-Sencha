// This - это объект 

const user = {
    name: 'kirill',
    dateB: '1994',
    getName() {
        return this.name; //ссылается на определенный ключ
    }
}

// bind // call // apply

const mainhero = {
    fellName: 'SpiderMan',
    hearts: 65,
    streng: 5,
};

const badHero = {
    fellName: 'Joker',
    hearts: 55,
    streng: 10,
};

function printHeroInfo() {
    console.log(this);
    console.log(${this.fullName}, ${this.hearts}, ${this.strng})
};

printHeroInfo.call(badHero)