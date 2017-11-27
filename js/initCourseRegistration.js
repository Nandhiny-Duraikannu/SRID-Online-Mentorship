function register() {
    const status = localStorage.getItem("status");
    if (status === "student") {
        Materialize.toast('You already registered Cloud Computing!', 5000);
    } else {
        const courses = localStorage.getItem("courses");
        if (courses === "default") {
            localStorage.setItem("courses", "addedCourse");
            window.location = "dashboard.html";
        } else {
            Materialize.toast('You already registered Cloud Computing!', 5000);
        }
    }
}