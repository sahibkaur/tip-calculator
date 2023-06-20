const reset_button = document.getElementById('reset');
console.log("Hi");
console.log(reset_button);
const input_val = document.getElementsByClassName('inputs');
let tipped = document.getElementById('tip-amount');
let totalper = document.getElementById('total-amount');
let tip_buttons = document.getElementsByClassName('tip-button');
console.log(tip_buttons);
const bill = input_val[0].value;
const number = input_val[1].value;
console.log(input_val);
let tip_amount, per;
function toActive() {

    tip_pointer = tip_buttons[0];
    let i=0;
    let flag = 0;
    while(tip_pointer!=null) {
        if(tip_pointer.classList.contains('active')) {
            flag=1;
            break
        }
        i++;
        tip_pointer = tip_buttons[i];
    }

    if(input_val[0].valueAsNumber>0 && input_val[1].valueAsNumber>0 && flag == 1 ) {
        reset_button.classList.add("active");
        console.log(per, input_val[0].valueAsNumber);
        tip_amount = (input_val[0].valueAsNumber)*per/100;
        console.log(tip_amount)
        const tip_amount_per = (tip_amount)/input_val[1].valueAsNumber;
        console.log(input_val[0].valueAsNumber + tip_amount);
        let total = (input_val[0].valueAsNumber + tip_amount)/input_val[1].valueAsNumber;
        console.log(total);

        //let tip = 
        tipped.innerHTML = "$"+tip_amount_per.toFixed(2);
        totalper.innerHTML = "$"+total.toFixed(2);

    }
}

function changeState(selectedTip) {
    console.log(selectedTip);
    tip_pointer = tip_buttons[0];
    let i=0;
    let custom_tip;
    while(tip_pointer!=null) {
        tip_pointer.classList.remove('active');
        i++;
        tip_pointer = tip_buttons[i];
    }
    selectedTip.classList.add('active');
    per = selectedTip.value;
    if(per=="custom") {
        custom_tip = prompt("Please enter the custom tip percentage");
        per = custom_tip;
        selectedTip.innerHTML = per + "%";
    }     
    toActive();
}
