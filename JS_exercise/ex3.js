// 1.fimd number of even integers
const countEven = (arr) =>
    arr.filter(num => num % 2 == 0).length

document.write(countEven([2,3,4,2,2,2,0]))
document. write("<br>"); 

//2.find number of even values upto given number
// const countEven = (arr) =>
//     arr.filter(num => num % 2 == 0).length

const createArray = (n) => {
    const newArray = [];
    for (let i = 1; i <= n; i++) {
        newArray.push(i);
    }
    return newArray;

}
document.write(createArray(5))
document. write("\n"); 
document.write("count:"+countEven(createArray(5)))
document. write("<br>"); 

//3.check if even array is in ascemding order

const isArrayAsc = (arr) => {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i + 1] < arr[i]) {
            return false
        }
        return true
    }

}
document.write(isArrayAsc([1,2]))
document. write("<br>"); 

//4.find largest even number from aray


const findLarge = (arr) => 
    Math.max(...arr.filter(num => num % 2 == 0))
//... spread operator

document.write(findLarge([1,2,3,4,6,7]))
document. write("<br>"); 

//5.replace first digit in string with $

//use regular expression

const replaceFirst = (str)=>str.replace(/[0-9]/,'$')
///[0-9]/g makes it global ie replace every num with $
///\d/ can also be used.
document.write(replaceFirst('abd1c23dcf'))





