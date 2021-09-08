// first 3 and last 3 add if length less than 3 return string

const checkString = (str) =>
    str.length < 3 ? str : str.slice(0, 3) + str.slice(-3)

document.write(checkString("meo"))
document. write("<br>"); 


//print first half of string of even length
const firstHalf = (str) => str.slice(0, str.length / 2)

document.write(firstHalf('no'))
document. write("<br>"); 

//concatenate two strings after removing their first character
const addstring = (str1, str2) =>
    str1.slice(1) + str2.slice(1)

document.write(addstring('mhello', 'dworld'))
document. write("<br>"); 

//find which number closer to 100 given two numbers
const closenum = (num1, num2) =>
    (100 - num1 > 100 - num2) ? num2 : num1

document.write(closenum(99,1))
document. write("<br>"); 

// check 2-4 occurence of character in string
const countChar = (str, char) =>
    str.split('').filter(ch => ch == char).length

const checkOccur = (str, char) =>
    countChar(str,char) >= 2 && countChar(str,char) <= 4

document.write(checkOccur('helllllo', 'l'))
