//массивы обозначаются []

const salaris = [100, 1000, 350];

const names = ['kir', 'lex'];

//добавление элементо (начало или конец)
// .push(item) - конец массива
// .unshift(item) - начало масива

const newJob = 5000;
salaris.push(newJob);

const newJob2 = 30000;
salaris.unshift(newJob2);

//удаление (начоло или конец)
//.shift() - из начала
//.pop() - из конца

// добавление и удаление любого элемента
//.splice(i, count, item) - удаляем элемент и ставит новый
// .slice(startindex, endindex) - создает новый массив

const newNum = 289;
salaris.splice(1, 1, newNum);
console.log(salaris);

const salaris2 = salaris.slice(0, 2);
console.log(salaris2);


// map

const nickName = ['2', '4', '6' ];

const nickX2 = nickName.map(() => {
    return nick * 2;
})


// sort -сортирует элементы 

nickName.sort((a, b) => {
    return a - b;
})

// concat -  объеденение нескольких массивов

const newName = ['rick', 'morty'];
const nexSoneme = ['rick2', 'vorty2'];

 const allName = newName.concat(nexSoneme);

