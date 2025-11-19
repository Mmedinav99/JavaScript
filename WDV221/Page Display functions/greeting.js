// JavaScript Document

// Greeting function
function greeting(inLocation) {
    let greetingBlock = document.querySelector("#" + inLocation);   
    greetingBlock.style.color = "#483D8B";
    greetingBlock.style.fontSize = "150%";                          
    greetingBlock.style.textAlign = "center";           

    let today = new Date(); 
    let currentTime = today.getHours();  

    if (currentTime >= 6 && currentTime < 12) {
        greetingBlock.innerHTML = "Good Morning!";
    } else if (currentTime >= 12 && currentTime < 17) {
        greetingBlock.innerHTML = "Good Afternoon!";
    } else {
        greetingBlock.innerHTML = "Good Evening!";
    }
}

// Display today's date in format: Sunday June 17, 2015
function displayDate(inLocation) {
    let dateBlock = document.querySelector("#" + inLocation);
    let today = new Date();

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = today.toLocaleDateString('en-US', options);

    dateBlock.innerHTML = formattedDate;
}

// Update copyright with symbol and current year
function updateCopyright(inLocation) {
    let copyrightBlock = document.querySelector("#" + inLocation);
    let year = new Date().getFullYear();

    copyrightBlock.innerHTML = "&copy; " + year + " DMACC All rights reserved";
}
