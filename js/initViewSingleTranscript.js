$(function () {
    function init() {
        let breadcrumbDom = $("#viewSingleTranscriptBreadCrumb");
        let status = localStorage.getItem("status");

        if (status === "tutor") {
            breadcrumbDom
                .append('<a class="breadcrumb">...</a>')
                .append('<a href="meeting-information.html" class="breadcrumb">Meeting</a>')
                .append('<a class="breadcrumb">Transcript</a>');
        } else {
            breadcrumbDom
                .append('<a class="breadcrumb">...</a>')
                .append('<a href="meeting-information.html" class="breadcrumb">Meeting</a>')
                .append('<a class="breadcrumb">Transcript</a>');
        }

    }
    init();
});