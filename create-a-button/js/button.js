const $btn = document.querySelector("#btn");
let cont = 0;

$btn.onclick = function () {
    cont++;
    $btn.innerHTML = cont;
}
