function confirmMeeting() {
    Materialize.toast('Successfully scheduled the meeting!', 5000, '', redirect());
}

function redirect() {
    if (typeof(Storage) !== "undefined") {
        let date = $('#meetingDate').val();
        localStorage.setItem('meetingDate', date);
        window.location = "meeting-detail.html";
    } else {
        alert("Sorry you don't support local storage!");
    }
}

function joinMeeting() {
    let $toastContent = $('<span>meeting...</span>')
        .add($('<div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>'))
        .add($('<button class="btn-flat toast-action" onclick="redirectToInformation()">Complete</button>'));
        Materialize.toast($toastContent, 1000000, '', redirectToInformation());
}

function redirectToInformation() {
    window.location = "meeting-information.html";
}