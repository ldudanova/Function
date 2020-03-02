var is = false,
    res = document.getElementById("result"),
    n = document.getElementById("n"),
    btn = document.getElementById("btn");

btn.onclick = function getN() {
    n = document.getElementById("n").value;

    for (i = 0; i < n; i++) {
        f();
    }

};


function f() {
    document.getElementById("result").innerHTML += !(is = !is) + "<br/> ";
}