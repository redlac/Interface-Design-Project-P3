function getDate() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    document.getElementById("date").innerHTML = month + "/" + day + "/" + year;
}
