$(function() {
    function init() {
        let status = localStorage.getItem("status");
        let buttonDom = $('#courseDashboardButton');
        if (status === "tutor") {
            buttonDom
                .append('<div class="row"><a class="waves-effect waves-light btn col s12" onclick="setDisabledBtn()">lecture videos</a></div>')
                .append('<div class="row"><a class="waves-effect waves-light btn col s12" onclick="setDisabledBtn()">create quiz</a></div>')
                .append('<div class="row"><a href="student-list.html" class="waves-effect waves-light btn col s12">student list</a></div>')
                .append('<div class="row"><a href="view-transcript.html" class="waves-effect waves-light btn col s12">view transcript</a></div>');
        } else {
            buttonDom
                .append('<div class="row"><a class="waves-effect waves-light btn col s12" onclick="viewVideo()">lecture videos</a></div>')
                .append('<div class="row"><a href="view-grades.html" class="waves-effect waves-light btn col s12">view grades</a></div>')
                .append('<div class="row"><a class="waves-effect waves-light btn col s12" onclick="setDisabledBtn()">take quiz</a></div>')
                .append('<div class="row"><a class="waves-effect waves-light btn col s12" onclick="setDisabledBtn()">forum</a></div>')
                .append('<div class="row"><a href="schedule-meeting.html" class="waves-effect waves-light btn col s12">scedule 1:1 meeting</a></div>')
                .append('<div class="row"><a href="view-transcript.html" class="waves-effect waves-light btn col s12">view meeting transcripts</a></div>');
        }
    }
    init();
});

function viewVideo() {
    localStorage.setItem("video", "default");
    window.location = "video.html";
}