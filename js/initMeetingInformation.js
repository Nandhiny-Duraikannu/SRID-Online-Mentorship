$(function () {
    function init() {
        let meetingDate = localStorage.getItem("meetingDate");
        let breadcrumbDom = $("#meetingInformationBreadCrumb");
        let status = localStorage.getItem("status");

        if (meetingDate === "undefined") {
            meetingDate = "no date picked!";
        }
        $('#meetingDateConfirmed').val(meetingDate);
        Materialize.toast('Transcript added in dashboard/Cloud Computing/view Transcript!', 5000);

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