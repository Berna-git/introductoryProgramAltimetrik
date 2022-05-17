let name = "Alvin";
let lastName =  "Yaquitori";
// Local Storage
//In the localStorage only saved information of type string
localStorage.setItem("lastname",lastName);
console.log("I'm local storage: "+ localStorage.getItem('lastname'));

// Session Storage
sessionStorage.setItem('name', name);
console.log("I'm Session storage: "+ sessionStorage.getItem('name')); 