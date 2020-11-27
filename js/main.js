function hideAllSections() { // define and name function to hide all sections
    var grabAllSections = document.querySelectorAll("section"); // define, name, and set variable to array of all section elements
    console.log(grabAllSections); // trace statement
    for (i = 0; i < grabAllSections.length; i++) { // create FOR loop that iterates through each section in array
        var eachSection = grabAllSections[i]; // define and name variable that will represent each section element in the array at index i
        eachSection.style.display = "none"; // change the style of each element to none
    }
}

function hideAllPointers() { // define and name function to hide all spans
    var grabAllPointers = document.querySelectorAll("span"); // define, name, and set variable to array of all span elements
    console.log(grabAllPointers); // trace statement
    for (i = 0; i < grabAllPointers.length; i++) { // create FOR loop that iterates through each span in array
        var eachPointer = grabAllPointers[i]; // define and name variable that will represent each span element in the array at index i
        eachPointer.style.display = "none"; // change the style of each element to none
    }
}

function showAbout() {
    // first, hide all sections
    hideAllSections();
    // display current section only
    var showContent = document.getElementById("about");
    showContent.style.display = "block";
    
    // next, hide all pointers (i.e., spans)
    hideAllPointers();
    // display current pointer only
    var showPointer = document.getElementById("aboutPointer");
    showPointer.style.display = "inline";
}

function showCurrent() {
    // first, hide all sections
    hideAllSections();
    // display current section only
    var showContent = document.getElementById("current");
    showContent.style.display = "block";
    
    // next, hide all pointers (i.e., spans)
    hideAllPointers();
    // display current pointer only
    var showPointer = document.getElementById("currentPointer");
    showPointer.style.display = "inline";
}

function showPast() {
    // first, hide all sections
    hideAllSections();
    // display current section only
    var showContent = document.getElementById("past");
    showContent.style.display = "block";
    
    // next, hide all pointers (i.e., spans)
    hideAllPointers();
    // display current pointer only
    var showPointer = document.getElementById("pastPointer");
    showPointer.style.display = "inline";
}

function showFuture() {
    // first, hide all sections
    hideAllSections();
    // display current section only
    var showContent = document.getElementById("future");
    showContent.style.display = "block";
    
    // next, hide all pointers (i.e., spans)
    hideAllPointers();
    // display current pointer only
    var showPointer = document.getElementById("futurePointer");
    showPointer.style.display = "inline";
}

function showConnect() {
    // does not hide current section, just adds popup
    var showContent = document.getElementById("connect");
    showContent.style.display = "block";
    // does not hide current pointer, just adds pointer
    var showPointer = document.getElementById("connectPointer");
    showPointer.style.display = "inline";
}

function hideConnect() {
    // just hides connect popup
    var hideContent = document.getElementById("connect");
    hideContent.style.display = "none";
    // just hides connect pointer
    var hidePointer = document.getElementById("connectPointer");
    hidePointer.style.display = "none";
}