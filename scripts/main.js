// This function document.querySelector is built into the browser.
// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// This function alert is built into the browser.
// alert("Welcome!");

// The function passed to addEventListener() here is called an anonymous function, because it doesn't have a name.
// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });

// The function passed to addEventListener() here is called arrow function. 
// An arrow function uses () => instead of function ():
document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
  });  