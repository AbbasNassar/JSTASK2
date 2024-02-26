var registerForm = document.querySelector(".registerForm");
registerForm.onsubmit = function(e){

    e.preventDefault();
    document.querySelector("input").value;

    document.querySelector("select").value
    if (document.querySelector("select").value == "dollar"){
        var result = document.querySelector("input").value / 3.64;
        result = result.toFixed(1);
        document.querySelector(".result").textContent = result;
    }
    else if (document.querySelector("select").value == "dinar"){
        var result = document.querySelector("input").value / 5.14;
        result = result.toFixed(1);
        document.querySelector(".result").textContent = result;
    }
    else if (document.querySelector("select").value == "nis"){
        var result = document.querySelector("input").value;
        result = result.toFixed(1);
        document.querySelector(".result").textContent = result;
    }

}