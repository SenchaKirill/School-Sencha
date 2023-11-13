// как создавать функции

//function name(...param) {}

function sayHallo() {
    console.log('Hello');
}
sayHallo();

function sum(a, b) {
    console.log(a + b);
}
sum(11, 20);



// function Expretion
// основное отличие, ее нельзя определять перед кодом 

const sum2 = function(a, b) {
    confirm.log(a + b);
}
sum(99, 53)


const sum3 = (a, b) => {
    return a + b;
}
const result = sum3(99, 10);
console.log(result);


//название функий. они должны содержать глагол и конктретику

// пример. показать Лоудер
//  function show - не верно 
// function showLouder - верно



const cuonter = 1;
const list = ['товар', 'товара', 'товаров'];


const getNoun = (num, arr) => {
    if(num === 1) {
        return num + ' ' + arr[0];
    } else if (num > 1 && num < 5) {
        return num + ' ' + arr[1];
    } else if (num >= 5) {
        return num + ' ' + arr[2];
    }
} 

const result3 = getNoun(cuonter, list);
console.log(result3);


const cuopn2 = 10;
const list2 = ['кирилла', 'кириллов', 'кирилльчиков'];

const result4 = getNoun(cuopn2, list2);
console.log(result4);