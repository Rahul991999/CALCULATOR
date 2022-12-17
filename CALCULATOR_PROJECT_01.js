let string = "";
let buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener("click", function () {
        let input = document.querySelector(".input")
        try {
            if (this.innerHTML != '=') {
                string = string + this.innerHTML;
            }

            if (this.innerHTML == '=') {
                input.value = eval(string);
            }
            else if (this.innerHTML == 'del') {
                string = string.slice(0,-4);
                input.value = string;
            }
            else if (this.innerHTML == 'C') {
                string = "";
                input.value = string;
            }
            else {
                input.value = string;
            }
        }
        catch (error) {
            alert("invalid input");
        }
    })
}

