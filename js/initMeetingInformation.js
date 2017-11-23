$(function() {
    function init() {
        let meetingDate = localStorage.getItem('meetingDate');
        if (meetingDate === "undefined") {
            meetingDate = "no date picked!";
        }
        $('#meetingDateConfirmed').val(meetingDate);
        Materialize.toast('Transcript added in XXX/XXX/XXX!', 5000);
    }
    init();
});