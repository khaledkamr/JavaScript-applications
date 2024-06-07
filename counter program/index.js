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
