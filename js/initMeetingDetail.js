$(function() {
    function init() {
        let meetingDate = localStorage.getItem('meetingDate');
        let stutus = localStorage.getItem("status");
        let breadcrumbDom = $('#meetingDetailBreadCrumb');

        if (meetingDate === "undefined") {
            meetingDate = "no date picked!";
        }
        $('#meetingDateConfirmed').val(meetingDate);

        if (status === "tutor") {
            breadcrumbDom
                .append('<a class="breadcrumb">...</a>')
                .append('<a href="student-list.html" class="breadcrumb">Students</a>')
                .append('<a href="view-grades.html" class="breadcrumb">Andrew</a>')
                .append('<a class="breadcrumb">Meeting</a>');
        } else {
            breadcrumbDom
                .append('<a href="dashboard.html" class="breadcrumb">Dashboard</a>')
                .append('<a href="course-dashboard.html" class="breadcrumb">Cloud Computing</a>')
                .append('<a class="breadcrumb">Meeting</a>');
        }
    }
    init();
});