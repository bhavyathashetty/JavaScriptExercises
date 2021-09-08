//1. report if given year is a leap year

const checkYear = (num) => num % 4 === 0;
document.write(checkYear(2024))
document. write("<br>"); 

//2.compare two objects based on thier property

const obj1 = { a: 1, b: 2, c: 1 };
const obj2 = { a: 1, b: 2, c: 1 };
const obj3 = { a: 1, b: 2, c: 1, d: 1 };

const objectEqual = (a, b) =>
    Object.keys(a).every(key => b[key])

document.write(objectEqual(obj1, obj3))
document. write("<br>"); 

//3.convert comma separated to 2d array

const parseCsv = (csvString) =>
    csvString.split('\n').map(row => row.split(','))
const str = `abc,def,ghi
jkl,mno,pqr
stu,vwz,dsw`;
console.log(parseCsv(str))

//4.generate random hexadecimal code
const getRandomhexa = () =>
    Math.floor(Math.random() * 16).toString(16)

const getHexColor = () =>
    '#' + Array.from({ length: 6 }).map(getRandomhexa).join('')

document.write(getHexColor())
document. write("<br>"); 

//5.function which returns true if predicate 
// function also returns true for given elements 

 
const iftrue = (arr) => arr.every(num => num > 0)
document.write(iftrue([1, 2, 0]))
