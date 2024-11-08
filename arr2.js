//find the first  element that is greater than 10  in an array

let arr = [1,2,31,4,7,9,63,7,8,54,3,5,6,5];

let largestNum = 0;

for(let i =0; i < arr.length; i++){
    if(arr[i] > 10){
        largestNum = arr[i];
        break;
    }
}
console.log(largestNum);