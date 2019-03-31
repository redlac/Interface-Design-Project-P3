function getDate() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    document.getElementById("header-currentDate").innerHTML = month + "/" + day + "/" + year;
}
