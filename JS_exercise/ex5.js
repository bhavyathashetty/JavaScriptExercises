//1.program to return passed string in alphabetical order.

const alphastring = (str) => (str.split('')
    .sort((a, b) => a > b ? 1 : -1))
    .join('');

document.write(alphastring('hello'))
document.write('<br>')

//2.program to count vowels in string

const countvowels = (
    str, letter = ['a', 'e', 'i', 'o', 'u']) =>
    str
        .split('')
        .filter(s => letter.indexOf(s) > -1)
        .length;
document.write(countvowels('heoaar'))
document.write('<br>')

//3.function to convert amount to coins

const countCoins = (money, coins = [25, 10, 5, 2, 1]) => {
    const totalCoins = [];
    for (let i = 0; i < coins.length; i++) {
        const thisCoinNum = Math.floor(money / coins[i]);
        for (let j = 0; j < thisCoinNum; j++) {
            totalCoins.push(coins[i])
        }
        money -= coins[i] * thisCoinNum;
    }
    return totalCoins;

}

document.write(countCoins(12))
document.write('<br>')

//4.extract unique characters from string
//set returns unique items and spread operator to convert it to array

const getUniqueChars = (str) => [...new Set(str.split(''))]

console.log(getUniqueChars('abbbccddea'))

//5.find first not repeated character in string

const getNotRepeated = (str) => str.split('')
    .filter((item, index, arr)=>
arr.filter(arrItem => arrItem === item).length == 1 

    )
document.write(getNotRepeated('bbdcc'))
