//Temperature Conversion program

const box = document.getElementById("box");
const tofar = document.getElementById("tofar");
const tocel = document.getElementById("tocel");
const result = document.getElementById("result");
let temp;

function convert()
{
    if(tofar.checked)
    {
        temp = Number(box.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + " F";
    }
    else if(tocel.checked)
    {
        temp = Number(box.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + " C";
    }
    else
    {
        result.textContent = "select a unit";
    }
}