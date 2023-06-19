const reset_button = document.getElementById('reset');
console.log("Hi");
console.log(reset_button);
const input_val = document.getElementsByClassName('inputs');
let tipped = document.getElementById('tip-amount');
let totalper = document.getElementById('total-amount');
let tip_buttons = document.getElementsByClassName('tip-button');
console.log(tip_buttons);
console.log(input_val);
let tip_amount;
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

    if(input_val[0].value>0 && input_val[1].value>0 && flag == 1 ) {
        reset_button.classList.add("active");
        //let tip = 
        tipped.innerHTML = "$"+tip_amount;
        totalper.innerHTML = "$"+input_val[1].value;
    }
}

function changeState(selectedTip) {
    console.log(selectedTip);
    tip_pointer = tip_buttons[0];
    let i=0;
    while(tip_pointer!=null) {
        tip_pointer.classList.remove('active');
        i++;
        tip_pointer = tip_buttons[i];
    }
    selectedTip.classList.add('active');
    const per = selectedTip.value;
    tip_amount = input_val[0].value*per/100;
    toActive();
}
