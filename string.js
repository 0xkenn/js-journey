const str = 'ABCDDDDDDEFGHIGHHHFHFUEBVOASGDHJKASJFDBHHASHJDFWOIEUHRVAKSJJFDFDDFDOEOEOIEFBGA';

const strArr = str.split('');
let arr = [];

let currentChar = strArr[0];
let currentSeq = [currentChar];

for (let i = 1; i < strArr.length; i++) {
    if (strArr[i] === currentChar) {
        currentSeq.push(strArr[i]);
    } else {
        arr.push(currentSeq);
        currentChar = strArr[i];
        currentSeq = [currentChar];
    }
}

// Push the last sequence
arr.push(currentSeq);

console.log(arr);

// To find the longest sequence
let longestSeq = arr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
}, []);

console.log('Longest sequence:', longestSeq.join(''));
