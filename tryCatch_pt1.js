const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty(){
  try{
    const isServe = await cookBeanSouffle();
    console.log(`${isServe} is served!`);
  }catch(error){
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty();


//functions
// This function returns true 50% of the time.
let randomSuccess = () => {
    let num = Math.random();
    if (num < .5 ){
      return true;
    } else {
      return false;
    }
   };
   
   // This function returns a promise that resolves half of the time and rejects half of the time
   let cookBeanSouffle = () => {
    return new Promise((resolve, reject) => {
      console.log('Fingers crossed... Putting the Bean Souffle in the oven');
      setTimeout(()=>{
        let success = randomSuccess();
        if(success){
          resolve('Bean Souffle');
        } else {
          reject('Dinner is ruined!');
        }
      }, 1000);
    });
   };
   
   module.exports = cookBeanSouffle;
