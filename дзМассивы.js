const filtered = [5, 6, 78, 788];
const res = filtered.filter((el, index) => {
    return el > 10
} )
 console.log(res)




 const promt1 = prompt('поиск');
 const searcLine = 'Kir'; 
 const nameSearc = ['Art', 'Kir', 'Ler', 'Tem'];
 const finisf = nameSearc.filter((el, index) => {
    
if(promt1.toLocaleLowerCase() === el.toLocaleLowerCase()) {
    return true
} else {
    return false
};

// return el === searcLine короткая запись

});


 console.log(finisf);







//const eblanFunction = (pidor_1, pidor_2, pidor_3) => {
//console.log(pidor_1, pidor_2, pidor_3);

//};

//eblanFunction('ki', 'ar', 'vl');




 