 const formatNumbers = number => {
    let num = String(Math.floor(number));
    for(let i = num.length; num > 3; num-=3){
         put = num[i] + ',';
         num += put; 

    }
    return num;    
}

//console.log(formatNumbers(30000));
console.log(formatNumbers(4444));
