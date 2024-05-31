    import { create } from 'domain';
import { createInterface } from 'readline';
const read = createInterface({
    input: process.stdin,
    output: process.stdout
});

const pattern = x =>{
    if(x < 1){
        return;
    }
    console.log(`${x}`);
    pattern(x-1);
    console.log(`${x}`);
};

read.question('Enter a symbol: ', (x)=> {
    pattern(x);
    read.close();
});
