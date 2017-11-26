$(function () {
    function init() {
        let breadcrumbDom = $("#scheduleMeetingBreadCrumb");
        let status = localStorage.getItem("status");

        if (status === "tutor") {
            breadcrumbDom
                .append('<a class="breadcrumb">...</a>')
                .append('<a href="view-grades.html" class="breadcrumb">Andrew</a>')
                .append('<a class="breadcrumb">Meeting</a>');
        } else {
            breadcrumbDom
                .append('<a class="breadcrumb">...</a>')
                .append('<a href="course-dashboard.html" class="breadcrumb">Cloud Computing</a>')
                .append('<a class="breadcrumb">Meeting</a>');
        }

    }
    init();
});

function confirm() {
    if (typeof (Storage) !== "undefined") {
        let date = $('#meetingDate').val();
        localStorage.setItem('meetingDate', date);
        localStorage.setItem("events", "meeting");
        window.location = "meeting-detail.html";
    } else {
        alert("Sorry you don't support local storage!");
    }
}