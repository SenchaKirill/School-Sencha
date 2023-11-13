// объекты 
 
// как создавать 

 const developer = {
    // ключ и валуе

    name: 'Ririll',
    job: 'barmen',
    years: '29',
    allInfo: {
        tyap: 'front',
    }
}

 console.log(developer);

 console.log('name', developer.name);


 // добавление и удаление объектов

 const student = {
    id: 1,
    program: 'js',

 }

 //добавление 
 student.city = vorkuta;

 console.log(student);

// удаление 

delete student.program;


// объект - это ссылкаб , только он является ссылочным типом дамом

const setName = (entity, value) => {

if (typeof entity === 'object') {
    entity.name = value;
} else {
    entity = value;
}
}

const developer111 = {
    name: 'Kirill',
}
let developerName = 'Kirill';

setName(developer111);


// объеденение объектов 


const you = {
    age: 25,
    experience: 3,
};

const you2 = {
    height: 180,
    isJunior: false,
};

const allYou = {
    ...you,
    ...you2,
};