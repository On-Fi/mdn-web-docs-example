// This function document.querySelector is built into the browser.
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// This function alert is built into the browser.
//alert("Welcome!");

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

// A semicolon at the end of a line indicates where a statement ends.
//let myVariable = "dob";