import { createInterface } from 'readline';

const read = createInterface({
    input: process.stdin,
    output: process.stdout
});
const decToBin = num => {
        let remainder = '';
        if(num < 0){
            return;
        }
             remainder = (num % 2) + remainder;
               num = Math.floor(num / 2);
        return remainder;
    //  return   Math.floor(num / 2) + (num % 2) + remainder; 
    }
read.question('Decimal number: ', (num) => {
    const res = decToBin(parseInt(num,10));
        console.log(`Binary number: ${res}`);
        read.close();
});

    