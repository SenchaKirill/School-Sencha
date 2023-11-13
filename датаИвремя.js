
// date 

const date = new Date();

// вычитать даты 
// .getTime

const date1 = new Date(1994, 6, 16);
const date2 = new Date();
const defference = date2.getTime() - date1.getTime();
console.log(defference);

