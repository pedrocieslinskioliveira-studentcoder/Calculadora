const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Erro";
    }
}

function sqrt(){
    try{
        display.value = Math.sqrt(eval(display.value));
    }catch{
        display.value = "Erro";
    }
}

function toggleSign(){
    if(display.value){
        display.value = String(Number(display.value) * -1);
    }
}