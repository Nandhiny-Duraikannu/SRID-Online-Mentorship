$(function() {
    function init() {
        let status = localStorage.getItem("status");
        let buttonDom = $('#courseDashboardButton');
        if (status === "tutor") {
            buttonDom
                .append('<a class="waves-effect waves-light btn col s12">lecture videos</a>')
                .append('<a class="waves-effect waves-light btn col s12">create quiz</a>')
                .append('<a href="student-list.html" class="waves-effect waves-light btn col s12">student list</a>')
                .append('<a href="view-transcript.html" class="waves-effect waves-light btn col s12">view transcript</a>')
        } else {
            buttonDom
                .append('<a class="waves-effect waves-light btn col s12" onclick="viewVideo()">lecture videos</a>')
                .append('<a href="view-grades.html" class="waves-effect waves-light btn col s12">view grades</a>')
                .append('<a class="waves-effect waves-light btn col s12">take quiz</a>')
                .append('<a class="waves-effect waves-light btn col s12">forum</a>')
                .append('<a href="schedule-meeting.html" class="waves-effect waves-light btn col s12">scedule 1:1 meeting</a>')
                .append('<a href="view-transcript.html" class="waves-effect waves-light btn col s12">view meeting transcripts</a>');
        }
    }
    init();
});

function viewVideo() {
    localStorage.setItem("video", "default");
    window.location = "video.html";
}