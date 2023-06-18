const reset_button = document.getElementById('reset');
console.log("Hi");
console.log(reset_button);
const input_val = document.getElementsByClassName('inputs');
console.log(input_val);
function toActive() {
    if(input_val[0].value>0 && input_val[1].value>0) {
        reset_button.classList.add("active");
    }
}

