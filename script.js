const button = document.querySelector("#buttonMinePi");
const display = document.querySelector("#displayPi #displayText");
let clicksButton = 0;
let valuePi;
const firstProductFormula = 2*(2**(1/2)) / 9801;
let Summation;
let SummationFirstProduct, SummationSecondProduct;

function fatorial(n) {
    let result = 1;

    for(let i = 1; i <= n; ++i) {
        result *= i;
    };
    return result;
};

button.addEventListener("click", () => {
    clicksButton += 1;
    console.log(clicksButton);
});

for(let i = 0; i = clicksButton; i++) {

}