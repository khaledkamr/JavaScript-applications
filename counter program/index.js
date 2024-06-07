// //COUNTER PROGRAN

let decrease = document.getElementById("dec");
let reset = document.getElementById("reset");
let increase = document.getElementById("inc");
let count = document.getElementById("count");

let c = 0;

decrease.onclick = function()
{
    c--;
    count.textContent = c;
}

increase.onclick = function()
{
    c++;
    count.textContent = c;
}

reset.onclick = function()
{
    c = 0;
    count.textContent = c;
}

// //-------------------------------------------------------------

// // checked program

// let checkbox = document.getElementById("checkbox");
// let visaBtn = document.getElementById("visaBtn");
// let masterCardBtn = document.getElementById("masterCardBtn");
// let paypalBtn = document.getElementById("PayPalBtn");
// let submit = document.getElementById("submit");
// let subResult = document.getElementById("subResult");
// let paymentResult = document.getElementById("paymentResult");


// submit.onclick = function()
// {
//     if(checkbox.checked)
//     {
//         subResult.textContent = `you are subscribed!`;
//     }
//     else
//     {
//         subResult.textContent = `you are not subscribed!`;
//     }

//     if(visaBtn.checked)
//     {
//         paymentResult.textContent = `you are paying with visa`;
//     }
//     else if(masterCardBtn.checked)
//     {
//         paymentResult.textContent = `you are paying with masterCard`;
//     }
//     else if(paypalBtn.checked)
//     {
//         paymentResult.textContent = `you are paying with PayPal`;
//     }
//     else
//     {
//         paymentResult.textContent = `you must choose method to pay!`;
//     }
// }


function Car(make, model, year, color)
{
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

const car1 = new Car("Ford", "Mustang", 2024, "red");

console.log(car1.make, car1.color);