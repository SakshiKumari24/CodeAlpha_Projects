const display = document.getElementById('display');

function appendChar(char){
    display.value += char;
}

function clearDisplay(){
    display.value='';
}

function deleteChar(){
    display.value=display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value=eval(display.value);
    }catch{
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(e){
    const key=e.key;

    if(!isNaN(key) || ['+','-','*','/','.'].includes(key)){
        appendChar(key);
    }else if(key ==='Enter') {
        calculate();
    }else if(key ==='Backspace') {
        deleteChar();
    }else if (key ==='Escape'){
        clearDisplay();
    
    }
});