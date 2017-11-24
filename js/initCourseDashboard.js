$(function() {
    function init() {
        let status = localStorage.getItem("status");
        let buttonDom = $('#courseDashboardButton');
        if (status === "tutor") {
            buttonDom
                .append('<div class="row"><a class="waves-effect waves-light btn col s12">lecture videos</a></div>')
                .append('<div class="row"><a class="waves-effect waves-light btn col s12">create quiz</a></div>')
                .append('<div class="row"><a class="waves-effect waves-light btn col s12">student list</a></div>')
                .append('<div class="row"><a class="waves-effect waves-light btn col s12">view transcript</a></div>');
        } else {
            buttonDom
            .append('<div class="row"><a class="waves-effect waves-light btn col s12">lecture videos</a></div>')
            .append('<div class="row"><a class="waves-effect waves-light btn col s12">view grads</a></div>')
            .append('<div class="row"><a class="waves-effect waves-light btn col s12">take quiz</a></div>')
            .append('<div class="row"><a class="waves-effect waves-light btn col s12">forum</a></div>')
            .append('<div class="row"><a class="waves-effect waves-light btn col s12">scedule 1:1 with Professor</a></div>')
            .append('<div class="row"><a class="waves-effect waves-light btn col s12">view meeting transcripts</a></div>');
        }
    }
    init();
});