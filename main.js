
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

function normalizer(name){

    name
        .replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ')

}






// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

function randomArray(size){
    let arr = []
    for( let i=0; i<size; i++){
        arr.push(Math.round(Math.random()*100));
    }
    return arr;
}

let result = randomArray(10, 100);
console.log(result);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort


 result.sort((a,b) => a-b);
 console.log(result);
 result.sort((a,b) => b-a);
 console.log(result);

 // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа


let numFilter = (length, num) => {
    let Array = [];
    for (let i = 0; i < length; i++) {
        Array.push(Math.floor(Math.random() * num));
    }
    return Array.filter(value => value % 2 === 0);
};
console.log(numFilter(15, 150));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.


let arrayRandom = (length, num) => {
    let numArray = [];
    for (let i = 0; i < length; i++) {
        numArray.push(Math.floor(Math.random() * num));
    }
    return numArray.map(value => value.toString());
};
console.log(arrayRandom(12, 200));



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.

sortNums('ascending') // [3,11,21]
sortNums('descending') // [21,11,3]


let nums = [11,21,3];

let sortNums = (arr, direction) => {
    if (direction === 'ascending') return arr.sort((a, b) => a - b);
    if (direction === 'descending') return arr.sort((a, b) => b - a);
};
console.log(sortNums([1, 56, 9, -20, 2345, 34, 98, 5], 'desc') );


//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// --
//
// // -- відсортувати його за спаданням за monthDuration
 let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 coursesAndDurationArray.sort((a, b) =>a.monthDuration - b.monthDuration);
console.log(coursesAndDurationArray);

// // відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
 console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5));
