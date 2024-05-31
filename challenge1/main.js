//import functions using es6 syntax
import { changeText, changeTOFunkyColor } from "./module.js";


const header = document.getElementById('header');
    changeText(header, 'yes, i did it!');
//call changetext here

setInterval(() => {
    //call changetofunckycolor here
    changeTOFunkyColor(header);
}, 200);