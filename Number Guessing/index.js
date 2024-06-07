// Number Guessing

let min = 1;
let max = 100;
let answer = Math.floor(Math.random() * (max - min + 1));

console.log(answer)

let guess = document.getElementById("input");
let ok = document.getElementById("ok");
let cancel = document.getElementById("cancel")
let result = document.getElementById("res");
let tries = document.getElementById("att");
let attempts = 0;
let number;

ok.onclick = function()
{
    number = guess.value;
    number = Number(number);

    if(isNaN(number))
    {
        result.textContent = 'Please inter a valid number';
    }
    else if(number == answer)
    {
        attempts++;
        result.textContent = 'congratulations, you got it right!';
        if(attempts == 1)
        {
            tries.textContent = `from the first try`;
        }
        else
        {
            tries.textContent = `with ${attempts} attempts`;
        }
    }
    else if(number <= (answer + 10) && number > answer)
    {
        result.textContent = 'Too close!';
        attempts++;
        tries.textContent = `attempts: ${attempts}`;
    }
    else if(number < answer && number >= (answer - 10))
    {
        result.textContent = 'Too close!';
        attempts++;
        tries.textContent = `attempts: ${attempts}`;
    }
    else if(number > answer)
    {
        result.textContent = 'Too high!';
        attempts++;
        tries.textContent = `attempts: ${attempts}`;
    }
    else if(number < answer)
    {
        result.textContent = 'Too low!';
        attempts++;
        tries.textContent = `attempts: ${attempts}`;
    }
}

cancel.onclick = function()
{
    answer = Math.floor(Math.random() * (max - min + 1));
    console.log(answer)
    attempts = 0;
    result.textContent = 'wanna play again?';
    tries.textContent = `attempts: ${attempts}`;
}
