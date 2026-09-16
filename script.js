const button = document.querySelector("#buttonMinePi");
const display = document.querySelector("#displayPi #displayText");
let clicksButton = 0;
let valuePi;
const firstProductFormula = 2*(2**(1/2)) / 9801;
let formulaProduct = BigInt(0);
let summationFirstFactor, summationSecondFactor;
let summationProduct = 0;

function fatorial(n) {
    let result = 1;

    for (let i = 1; i <= n; ++i) {
        result *= i;
    };
    return result;
};

button.addEventListener("click", () => {
    clicksButton++;
    for (let i = 0; i < clicksButton; i++) {
        summationFirstFactor = (i*26390 + 1103) / ((fatorial(i))**4);
        summationSecondFactor = (fatorial(4*i)) / (396**(4*i));
        summationProduct += summationFirstFactor * summationSecondFactor;
        formulaProduct = (1 / (summationProduct * firstProductFormula));
    };
    summationProduct = 0;
});