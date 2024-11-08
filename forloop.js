
function triangleStraight(rows){
    for(let i = 1; i <= rows ; i++) {
        let str = '';
    
        for(let j = 1; j <= i ; j++) {
            str += i + ' ';
        }
    
        console.log(str);
    }
}


function triangle(rows){
    for(let i = 1; i <= rows ; i++) {
        let str = '';
    
        for(let x = 1; x <= rows - i; x++){
            str += ' ';
        }
        for(let j = 1; j <= i ; j++) {
            str += i + ' ';
        }
      
        console.log(str);
    }
}



function quiz(rows){

}

let arr = [3,11,0,13,8,12,1];
let num = 0;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= 10){
       num = arr[i];
        console.log(num);
         break;
    }
}

