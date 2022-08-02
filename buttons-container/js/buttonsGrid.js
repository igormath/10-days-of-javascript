const $btn5 = document.querySelector("#btn5");

const $btn1 = document.querySelector("#btn1");
const $btn2 = document.querySelector("#btn2");
const $btn3 = document.querySelector("#btn3");
const $btn4 = document.querySelector("#btn4");
const $btn6 = document.querySelector("#btn6");
const $btn7 = document.querySelector("#btn7");
const $btn8 = document.querySelector("#btn8");
const $btn9 = document.querySelector("#btn9");

$btn5.onclick = function () {
    let btn1 = $btn1.innerHTML;
    let btn2 = $btn2.innerHTML;
    let btn3 = $btn3.innerHTML;
    let btn4 = $btn4.innerHTML;
    let btn6 = $btn6.innerHTML;
    let btn7 = $btn7.innerHTML;
    let btn8 = $btn8.innerHTML;
    let btn9 = $btn9.innerHTML;

    $btn1.innerHTML = btn4;
    $btn2.innerHTML = btn1;
    $btn3.innerHTML = btn2;
    $btn4.innerHTML = btn7;
    $btn6.innerHTML = btn3;
    $btn7.innerHTML = btn8;
    $btn8.innerHTML = btn9;
    $btn9.innerHTML = btn6;
}
