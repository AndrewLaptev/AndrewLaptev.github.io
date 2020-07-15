var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/37734019941_a8d1a1492c_b.jpg') {
        myImage.setAttribute('src','images/32439640620_26ea4d62f1_b.jpg');
    }else{
        myImage.setAttribute('src','images/37734019941_a8d1a1492c_b.jpg');
    }
}

var myBtn = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name:');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Welcome to Destiny 2, Guardian ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Destiny 2, Guardian ' + storedName;
}

myBtn.onclick = function() {
    setUserName();
}