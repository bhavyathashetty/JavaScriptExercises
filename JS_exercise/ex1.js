// js program to check two numbers based on conditions
const checknum = (a, b) =>
    a === 100 || b === 100 || (a + b) === 100
document.write(checknum(0,10));
document. write("<br>"); 

//extension of filename
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'))
document.write(getFileExtension('file.js'))
document. write("<br>"); 

//replace every character in string with character folloewing in alpjhabet

const nextchar = (str) =>
    str.split('')
        .map(char => String.fromCharCode(char.charCodeAt(0)
            + 1))
        .join('');

document.write(nextchar('abcd'))
document. write("<br>"); 

// to get current date

const formatDate = (date = new Date) => {
    const dates = date.getDate();
    const months = date.getMonth();
    const year = date.getFullYear();
    return `${dates}/${months}/${year}`;
}

document.write(formatDate());
document. write("<br>"); 

//program to add new to string

const addnew = (str) =>
    str.indexOf('New!') === 0 ? str : `New! ${str}`;

document.write(addnew('New! hello'));
document. write("<br>"); 