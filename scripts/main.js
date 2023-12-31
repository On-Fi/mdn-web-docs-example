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
// document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");
//   });  



const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Firefox_logo.png") {
      myImage.setAttribute("src", "images/Firefox_logo2.png");
    } else {
      myImage.setAttribute("src", "images/Firefox_logo.png");
    }
  };  


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

  myButton.onclick = () => {
    setUserName();
  };
