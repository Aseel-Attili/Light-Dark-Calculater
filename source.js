const themeToggeler = document.querySelector(".themeToggeler");
const container = document.querySelector('.container');
const display = document.querySelector(".display");
let operators = document.querySelectorAll(".lightOperators");
let lightNumberBtns = document.querySelectorAll(".lightNumberBtn");
const CBtnLight = document.querySelector(".CBtnLight");
const equlaBtnLight = document.querySelector(".equlaBtnLight");


themeToggeler.addEventListener('click', function(){
    //container switching themes
    container.classList.toggle('lightContainer');
    container.classList.toggle('darkContainer');

    //themeToggeler switching themes
    this.classList.toggle("lightThemeToggeler");
    this.classList.toggle("darkThemeToggeler");


    //display switching themes
    display.classList.toggle("lightDisplay");
    display.classList.toggle("darkDisplay");

    
    //operators buttons switching themes
    operators.forEach((element) => {
        element.classList.toggle("lightOperators");
        element.classList.toggle("darkOperators");
    });


    //lightNumberBtns switching themes
    lightNumberBtns.forEach((element) => {
        element.classList.toggle("lightNumberBtn");
        element.classList.toggle("darkNumberBtn");
    });


    //CBtnLight switching themes
    CBtnLight.classList.toggle("CBtnLight");
    CBtnLight.classList.toggle("CBtnDark");


    //equlaBtnLight switching themes
    equlaBtnLight.classList.toggle("equlaBtnLight");
    equlaBtnLight.classList.toggle("equlaBtnDark");
});

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try{
        display.value = eval(display.value);
    }catch {
        display.value = 'Error';
    }
}

function backSpace() {
    let displayText = display.value;
    displayText = displayText.slice(0, displayText.length - 1);
    display.value = displayText;
}