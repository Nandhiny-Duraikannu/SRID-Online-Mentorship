function setScore() {
    redirect();    
}

function redirect() {
    if (typeof(Storage) !== "undefined") {
        // console.log(ind)
        localStorage.setItem('numberOfScore', "4");
        window.location = "../html/tutor-view-grades.html";
    } else {
        alert("Sorry you don't support local storage!");
    }
}
