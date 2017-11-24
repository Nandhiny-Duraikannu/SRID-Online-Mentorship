function register() {
    let status = localStorage.getItem("status");
    if (status === "student") {
        Materialize.toast('You already registered Cloud Computing!', 5000);
    } else {
        localStorage.setItem("courses", "addedCourse");
        window.location = "dashboard.html";
    }
}