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
    localStorage.setItem("isRegistered", "default");
    
    window.location = "html/dashboard.html";
}   