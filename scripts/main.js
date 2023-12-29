// This function document.querySelector is built into the browser.
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// This function alert is built into the browser.
//alert("Welcome!");

// the function passed to addEventListener() here is called an anonymous function, because it doesn't have a name.
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
