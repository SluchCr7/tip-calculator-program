const Billinput = document.getElementById('bill');
const Peopleinput = document.getElementById('people');
const tippersons = document.getElementById('tip');
const totalpersons = document.getElementById('total');
let buttons = document.querySelectorAll(".buttons button");
let custome = document.querySelector(".btncustome");


Peopleinput.value = 1;
Billinput.value = 0;
tippersons.value = "$" + (0.0).toFixed(2);
totalpersons.value = "$" + (0.0).toFixed(2)

let Billvalue = 0.0;
let peoplevalue = 1;
let tipactive = 0.15;
Billinput.addEventListener("input", () => {
    Billvalue = parseFloat(Billinput.value)
    console.log(Billvalue)
    calctip()
})

Peopleinput.addEventListener("input", () => {
    peoplevalue = parseFloat(Peopleinput.value)
    if (peoplevalue == 0) {
        error.style.display = "block"
        setTimeout(() => {
            error.style.display = "none"
        }, 2000)
        peoplevalue = 1
    }
    console.log(peoplevalue)
    calctip()
})

buttons.forEach((button) => {
    button.addEventListener("click", (event)=>{
        buttons.forEach((button) => {
        button.classList.remove("active_tip");
            if (event.currentTarget.innerHTML == button.innerHTML) {
                event.currentTarget.classList.add("active_tip");
                tipactive = parseFloat(event.currentTarget.innerHTML) / 100;
            }
        })
        calctip();
    })
})

custome.addEventListener("input", () => {
    tipactive = parseFloat(custome.value) / 100
    calctip()
})

function calctip() {
    let tip = (Billvalue * tipactive) / peoplevalue
    console.log(tipactive)
    let total = (Billvalue * tip) / peoplevalue
    tippersons.innerHTML = "$" + (tip).toFixed(2)
    totalpersons.innerHTML = "$"+(total).toFixed(2)
}

let reset = document.getElementById("reset")

reset.addEventListener("click", () => {
    tippersons.innerHTML = `$${(0.0).toFixed(2)}`
    totalpersons.innerHTML = "$"+(0.0).toFixed(2)
    Peopleinput.value = 0
    Billinput.value = 0
    buttons.forEach((el) => {
        el.classList.remove("active_tip")
    })
})

