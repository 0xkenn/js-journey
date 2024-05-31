// recursion is a stack 
// a function that call itself is called recursion
//recursion is like a loop
const loop = x => {
    if(x < 0){
        return;
    }

    console.log(`Begin Recursion: ${x}`);
    loop(x -1);
    console.log(`End Recursion: ${x}`);

}
loop(3);

