function myFunction (id) {
    var info = document.getElementById(id);
    if (info.style.display == "none") {
        info.style.display = "block";
    }
    else {
        info.style.display = "none";
    }
}