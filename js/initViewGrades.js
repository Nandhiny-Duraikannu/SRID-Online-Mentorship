$(function () {
    function init() {
        let status = localStorage.getItem("status");
        let breadcrumbDom = $("#viewGradesBreadCrumb");
        let tutorBtnDom = $('#tutorButton');

        if (status === "tutor") {
            breadcrumbDom
                .append('<a class="breadcrumb">...</a>')
                .append('<a href="student-list.html" class="breadcrumb">Students</a>')
                .append('<a class="breadcrumb">Andrew</a>');
            tutorBtnDom
                .append('<div class="row center"><a href="../html/add-grades.html" class="waves-effect waves-light btn col s12">Add Grades</a></div>\
                        <div class="row center"><a href="schedule-meeting.html" class="waves-effect waves-light btn col s12">Schedule Meeting</a></div>');

        } else {
            breadcrumbDom
                .append('<a class="breadcrumb">...</a>')
                .append('<a href="course-dashboard.html" class="breadcrumb">Cloud Computing</a>')
                .append('<a class="breadcrumb">View Grades</a>');
        }

    }
    init();
});