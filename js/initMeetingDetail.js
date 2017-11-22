$(function() {
    function init() {
        let meetingDate = localStorage.getItem('meetingDate');
        if (meetingDate === "undefined") {
            meetingDate = "no date picked!";
        }
        $('#meetingDateConfirmed').val(meetingDate);
    }
    init();
});