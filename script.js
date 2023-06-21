const reset_button = document.getElementById('reset');
const input_val = document.getElementsByClassName('inputs');
let tipped = document.getElementById('tip-amount');
let totalper = document.getElementById('total-amount');
let tip_buttons = document.getElementsByClassName('tip-button');
let not_zero_text = document.getElementsByClassName('no-zero');
// let custom_input = document.getElementById("custom-input");
console.log(tip_buttons);
const bill = input_val[0].value;
const number = input_val[1].value;
console.log(input_val);
let tip_amount, per;
function toActive() {


    let flag = 0;
    if(per>0) {
        flag=1
    }
    if(input_val[0].valueAsNumber>0) {
        input_val[0].style.border = "2px solid hsl(172, 67%, 45%)";
        not_zero_text[0].classList.add('hide');
    } else {
        input_val[0].style.border = "2px solid red";
        not_zero_text[0].classList.remove('hide');
    }
    
    if(input_val[2].valueAsNumber>0) {
        input_val[2].style.border = "0";
        input_val[2].style.border = "2px solid hsl(172, 67%, 45%)";
        not_zero_text[1].classList.add('hide');
    } else {
        input_val[2].style.border = "2px solid red";
        not_zero_text[1].classList.remove('hide');
    }

    if(input_val[0].valueAsNumber>0 && input_val[2].valueAsNumber>0 && flag == 1 ) {
        reset_button.classList.add("active");
        reset_button.classList.remove("inactive");
        console.log(per, input_val[0].valueAsNumber);
        tip_amount = (input_val[0].valueAsNumber)*per/100;
        console.log(tip_amount)
        const tip_amount_per = (tip_amount)/input_val[2].valueAsNumber;
        console.log(input_val[0].valueAsNumber + tip_amount);
        let total = (input_val[0].valueAsNumber + tip_amount)/input_val[2].valueAsNumber;
        console.log(total);

        //let tip = 
        tipped.innerHTML = "$"+tip_amount_per.toFixed(2);
        totalper.innerHTML = "$"+total.toFixed(2);

    }
}
function inactiveButtons() {
    tip_pointer = tip_buttons[0];
    let i=0;
    while(tip_pointer!=null) {
        tip_pointer.classList.remove('active');
        i++;
        tip_pointer = tip_buttons[i];
    }
}

function changeState(selectedTip) {
    console.log(selectedTip);
    tip_pointer = tip_buttons[0];
    let i=0;
    let custom_tip;

    inactiveButtons();

    selectedTip.classList.add('active');
    per = selectedTip.value;
    // if(per=="custom") {
    //     custom_tip = prompt("Please enter the custom tip percentage");
    //     per = custom_tip;
    //     selectedTip.innerHTML = per + "%";
    // }     
    toActive();
}

function reset(btn) {
    if(btn.classList.contains('inactive')) {
        return;
    }
    input_val[0].value="";
    input_val[1].value="";
    input_val[2].value="";
    inactiveButtons();
    tipped.innerHTML = "$0.00";
    totalper.innerHTML = "$0.00";
    btn.classList.remove("active");
    btn.classList.add("inactive");
}

function customTip(custom_input) {
    per = custom_input.value;
    toActive();
}
