//adding use strict globally
"use strict";
let modeBtn = document.getElementById("mode");
let modeImg = document.getElementById("modeImg");
let guessBtn = document.getElementById("submitBtn");
let proImg = document.getElementById("productImg");
let itmDesc = document.getElementById("itemDesc");
let links = document.querySelectorAll("a");
let btns = document.getElementById("proBtns").querySelectorAll("button");
let body = document.body;
let switcher = true;//boolean to use in switching light mopde dark mode img

//---------Functions----------
//Dark mode/Light mode switcher 
function modeSwitch(){
    //set up dark mode css then switch it here
    if (switcher){
        //image from flaticon.com, artist = Rashad
        modeImg.src = "./imgs/Sun-Yellow.png";
        switcher = false;
        body.classList.toggle("night-mode");
        document.getElementById("header").style.backgroundColor = '#0F0326';
        document.getElementById("header").style.color = '#F5F7DC';
        document.getElementById("submitBtn").style.color = '#0F0326';
        document.getElementById("submitBtn").style.backgroundColor = '#F5F7DC';
        document.querySelector("html").style.backgroundColor = "black";
        for (let i = 0; i < links.length; i++ ){
            let link = links[i];
            link.style.color = '#0F0326';
        }
        for (let i = 0; i < btns.length; i++) {
            let btn = btns[i];
            btn.style.color = '#0F0326';
            btn.style.backgroundColor = '#F5F7DC'
        }
        document.querySelector("footer").classList.toggle("night-mode");
    } else {
        //image from flaticon.com, artist = iconixar
        modeImg.src = "./imgs/DarkMode.png"; 
        switcher = true;
        body.classList.toggle("night-mode");
        document.getElementById("header").style.backgroundColor = '';
        document.getElementById("header").style.color = '#0F0326';
        document.getElementById("submitBtn").style.color = '#F5F7DC';
        document.getElementById("submitBtn").style.backgroundColor = '#0F0326';
        document.querySelector("html").style.backgroundColor = '#F5F7DC';
        for (let i = 0; i < links.length; i++) {
            let link = links[i];
            link.style.color = '#0F0326';
        }
        for (let i = 0; i < btns.length; i++) {
            let btn = btns[i];
            btn.style.color = '#F5F7DC';
            btn.style.backgroundColor = '#0F0326'
        }
        document.querySelector("footer").classList.toggle("night-mode");
    }
}

//functions for products selection
//will have one available in the HTML and change the image and description as the buttons underneath are clicked.
//ids = purple, black, midnight, silver, turqoise
//change image and dt when clicked id = itemDesc
function showPurple() { //show the currently selected product and hide the others
    proImg.src = "./imgs/Dragon-Shield-Purple.jpg";
    itmDesc.innerHTML = "Dragon Shield Purple Card Sleeves"
}
function showBlack(){ //show the currently selected product and hide the others
    proImg.src = "./imgs/DragonShield-Black.jpg";
    itmDesc.innerHTML = "Dragon Shield Black Card Sleeves"
}
function showMidnight() { //show the currently selected product and hide the others
    proImg.src = "./imgs/DragonShield-Midnight.jpg";
    itmDesc.innerHTML = "Dragon Shield Midnight Blue Card Sleeves"
}
function showSilver() { //show the currently selected product and hide the others
    proImg.src = "./imgs/DragonShield-Silver.jpg";
    itmDesc.innerHTML = "Dragon Shield Silver Card Sleeves"
}
function showTurqoise() { //show the currently selected product and hide the others
    proImg.src = "./imgs/DragonShield-Turqoise.jpg";
    itmDesc.innerHTML = "Dragon Shield Turqoise Card Sleeves"
}
//Code for guessing game
let randNum = 0;

function getRandomNum(e) {
    const gamePar = document.createElement("p");
    document.getElementById("game").appendChild(gamePar);
    e.preventDefault();
    randNum = Math.floor(Math.random() * 10) + 1;
    let guess = document.getElementById('guess');
    if(guess.value == randNum){
        let win =document.createTextNode("You Win!");
        gamePar.appendChild(win);
        
    }else{
        gamePar.innerHtml = "You Lose."
        let lose = document.createTextNode("You Lose.");
        gamePar.appendChild(lose);
    }
    //hiding Guess after 30 Seconds
    function hideGuess(){
        gamePar.style.display= "none";
        document.getElementById("gameForm").reset();
    }
    setTimeout(hideGuess,30000)
}
//Form Validation for contact form
function valContactForm(e){//validate the contact form
    e.preventDefault();
    let isValid = true;
    let radIsValid = false;
    let radChoice = document.getElementById("radChoice");
    let phoneRad = document.getElementById("phoneRad");
    let emailRad = document.getElementById("emailRad");
    let formErrors = document.querySelector("#formErrors");
    let output = document.getElementById("output");
    //Regex values
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

    let newOl = document.createElement("ol");
    form.insertBefore(newOl, formErrors);
    //validate name input
    let name = document.getElementById("name");
    if (name.value.length < 1) {
        name.classList.add("error");
        let newLi = document.createElement("li")
        newLi.innerHTML = "Missing name.";
        newOl.appendChild(newLi);
        isValid = false;
    } 
    //validate pNumber input
    let pNumber = document.getElementById("pNumber");
    if(pNumber.value.length < 10 || pNumber.value.length > 10) {
        pNumber.classList.add("error");
        let newLi = document.createElement("li")
        newLi.innerHTML = "Invalid or missing phone number.";
        newOl.appendChild(newLi);
        isValid = false;
    } 
    
    //validate email input
    let email = document.getElementById("email");
    if (email.value.length < 1 || !emailRegex.test(email.value)) {
        email.classList.add("error");
        let newLi = document.createElement("li")
        newLi.innerHTML = "Invalid or missing email address.";
        newOl.appendChild(newLi);
        isValid = false;
    } 
    //comments
    let comments = document.getElementById("comments");
    if (comments.value.length < 1) {
        comments.classList.add("error");
        let newLi = document.createElement("li")
        newLi.innerHTML = "Missing Comments.";
        newOl.appendChild(newLi);
        isValid = false;
    } 

    //validate radio button input
    if(phoneRad.checked){
        radIsValid = phoneRad.checked;
        radChoice.textContent = "You will be contacted via phone."
    }
    if(emailRad.checked){
        radIsValid = emailRad.checked;
        radChoice.textContent = "You will be contacted via email."
    }
    output.textContent = `Name: ${name.value}
    Phone Number: ${pNumber.value}
    Email: ${email.value}
    Your Comment: ${comments.value}`

    //Reset values
    name.value = "";
    pNumber.value = "";
    email.value = "";
    comments.value = "";
}
//Event listeners
modeBtn.addEventListener('click', modeSwitch);
guessBtn.addEventListener('click', getRandomNum);
contactBtn.addEventListener('click', valContactForm);
document.getElementById("purple").addEventListener('click',showPurple);
document.getElementById("black").addEventListener('click', showBlack);
document.getElementById("midnight").addEventListener('click', showMidnight);
document.getElementById("silver").addEventListener('click', showSilver);
document.getElementById("turqoise").addEventListener('click', showTurqoise);
