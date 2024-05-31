  //method 1
  
  // const {checkInventory} = require('./library.js');

  // const order = [['sunglasses', 1], ['bags', 2]];

  // // Write your code below:
  // const handleSuccess = onFulfilled => {
  //   console.log(onFulfilled);
  // }
  // const handleFailure = onRejected => {
  //   console.log(onRejected);
  // }
  // checkInventory(order).then(handleSuccess, handleFailure);

//other method 

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:
checkInventory(order)
  .then(handleSuccess)
  .catch(handleFailure);
