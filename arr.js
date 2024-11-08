//how to find the largest number in an array

let arr = [1,21,331,43,15,61,798,22];
let largestNum  = 0 ; // arr[0]

    for(let i = 0; i < arr.length; i++){
        if(arr[i]  >  largestNum){
            largestNum = arr[i];
        }
    }
console.log(`The Largest number in the array is: ${largestNum}`);
