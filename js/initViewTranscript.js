$(function () {
    function init() {
        let status = localStorage.getItem("status");
        let transcriptContentDom = $("#transcriptContent");

        if (status === "tutor") {
            transcriptContentDom
                .append('<b>Transcript_Andrew_11/10/2017_12:00:00:</b><div class="card-panel"><p> Hi Emily<br> Hi Andrew<br> How are you today?<br> I am OK. How are you?<br> I am well, thanks. And thank you for joining the meeting.<br> I need to talk with you for a few minutes about the quiz 4 </p></div>')
                .append('<b>Transcript_Alice_20/10/2017_01:00:00:</b><div class="card-panel"><p> Hi Emily<br> Hi Alice<br> How are you today?<br> I am OK. How are you?<br> I am well, thanks. And thank you for joining the meeting.<br> I need to talk with you for a few minutes about the quiz 4 </p></div>');
        } else {
            transcriptContentDom
                .append('<b>Transcript_Andrew_11/10/2017_12:00:00:</b><div class="card-panel"><p> Hi Emily<br> Hi Andrew<br> How are you today?<br> I am OK. How are you?<br> I am well, thanks. And thank you for joining the meeting.<br> I need to talk with you for a few minutes about the quiz 4 </p></div>')
                .append('<b>Transcript_Andrew_20/10/2017_01:00:00:</b><div class="card-panel"><p> Hi Emily<br> Hi Andrew<br> How are you today?<br> I am OK. How are you?<br> I am well, thanks. And thank you for joining the meeting.<br> I need to talk with you for a few minutes about the quiz 4 </p></div>');
        }

    }
    init();
});