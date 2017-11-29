$(function () {
    function init() {
        Materialize.toast('Successfully added the meeting!', 5000);

        const meetingDate = localStorage.getItem('meetingDate');
        const status = localStorage.getItem("status");
        const breadcrumbDom = $('#meetingDetailBreadCrumb');

        if (meetingDate === "undefined") {
            meetingDate = "no date picked!";
        }

        $('#meetingDateConfirmed').val(meetingDate);

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

function joinMeeting() {
    localStorage.setItem("events", "default");
    const $toastContent = $('<span>Meeting in progress...</span>')
        .add($('<div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>'))
        .add($('<button class="btn-flat toast-action" onclick="redirectToInformation()">Done</button>'));
    Materialize.toast($toastContent);
}

function redirectToInformation() {
    window.location = "meeting-information.html";
}