function valiadeLogin() {
    if (document.getElementById("username").value=="Kody" && document.getElementById("password").value=="CMPS253") {
        document.getElementById("greeting").innerHTML = "Hello Kody!";
        document.getElementById("loginInfo").className = "hidden";
    }
}