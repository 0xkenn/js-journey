//closure is a nested function 
//inner function can use the arguments and variables of the outside function while
// outer function cannot use the inner function variables and arguments
import { createInterface} from 'readline';

const outer = (a,b) => {
    const inner = x => x *x;
    return inner(a) + inner(b);
}

//call the function

const read = createInterface({
    input: process.stdin,
    output: process.stdout
});


    read.question('Enter two(2) numbers', (num1,num2) => {
        
       let res = outer(num1, num2);
       console.log(res);
    });

