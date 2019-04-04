function getDate() {
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("header-currentDate").innerHTML = m + "/" + d + "/" + y;
}

function fireClickEvent(){
    document.getElementById("regular-tab").onclick();
}
    
document.getElementById("regular-tab").onclick();