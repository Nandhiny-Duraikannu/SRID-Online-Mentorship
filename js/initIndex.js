$(function () {
    function init() {
        localStorage.clear();
    }
    init();
});

function login(status) {
    localStorage.setItem("status", status);
    localStorage.setItem("events", "default");
    localStorage.setItem("courses", "default");
    window.location = "html/dashboard.html";
}   