const display = val => {
    document.getElementById('result').value += val;
}

const clear = () => {
    document.getElementById('result').value = "";
}

const calculate = () => { 
   try {
       let x = document.getElementById('result').value;
       let y = eval(x);
       document.getElementById('result').value = y;
   } catch(e) {
       document.getElementById('result').value = "Syntax Error"; 
   }
}


const sqrt = () => {
   let x = document.getElementById('result').value;

   try {
    let result = Math.sqrt(eval(x));
    document.getElementById('result').value = result;
} catch(e) {
    document.getElementById('result').value = "Syntax Error"; 
}
}