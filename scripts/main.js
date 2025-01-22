const img1 =
  "https://vignette.wikia.nocookie.net/logopedia/images/0/01/Mozilla_Firefox_2004_Logo.png/revision/latest?cb=20190820193019";
const img2 =
  "https://static.vecteezy.com/system/resources/previews/021/514/877/original/mozilla-firefox-browser-brand-logo-symbol-design-software-illustration-free-vector.jpg";

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === img1) {
    myImage.setAttribute("src", img2);
  } else {
    myImage.setAttribute("src", img1);
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

// localStorage.removeItem('name');
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}