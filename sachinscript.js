function myFunction() {
    var a = document.getElementById("unit").value;
    var b = document.getElementById("unit1").value;
    var Nm = document.getElementById("name").value;
    var c = b - a;
    var Typo = document.getElementById("select").value;
    if (Typo == "household" && c > 20) {
        var d = c * 8.29;
        var n = d.toFixed(2);
        alert(` Dear ${Nm} the total amount is Rs ${n}`);
    } else if (Typo == "business" && c > 20) {
        var e = c * 9.01;
        var n1 = e.toFixed(2);
        alert(`Dear ${Nm} the total amount is Rs ${n1}`);
    } else if (c <= 20 && c > 0) {
        alert(
            `Dear ${Nm} The minimum charge for you is Rs 200`
        );
    }
    else if (a == '' || b == '' || Nm == '') {
        alert('Please enter all fields')
    }
    else {
        alert('Please enter valid units')
    }
}