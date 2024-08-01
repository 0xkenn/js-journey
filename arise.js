let num = [1,2,3,4,5,6,7,8,9,0];



const swertres = (num1,num2,num3) =>{
    let swertres = []
    for(let i = 0; i < 3; i++){
        swertres.push(Math.floor(Math.random() * num.length));
    }
    if(num1 === swertres[0] && num2 === swertres[1] && num3 === swertres[2]){
        return `Congratulations you won swertres loto your lucky number is ${num1}, ${num2}, ${num3}`;
    }else{
        return  `You lost swertres loto the lucky number is ${swertres[0]}, ${swertres[1]}, ${swertres[2]}`;
    }
}

for(let i = 0; i < 10; i++){
    console.log(swertres(3,0,9));
}