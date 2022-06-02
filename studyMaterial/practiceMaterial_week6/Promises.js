const somethingWillHappen = () => new Promise((resolve, reject) => true ? resolve('Hey!') : reject('Whoops!'));

somethingWillHappen()
  .then( response => console.log(response))
  .catch( err => console.log(err));

const error = new Error('Woops!!'); // Error that allows us to see more details of the error in the console

const somethingWillHappen2 = () => new Promise((resolve, reject) => true ? setTimeout(() => resolve('True'), 5000) : reject(error)
);

somethingWillHappen2()
  .then( response => console.log(response))
  .catch( err => console.log(err));

// To run all the promises we have the Promise.all() method that will return an array with the response of all the promises that we pass as parameters.

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then( response => console.log(response))
  .catch(err => console.log(err))