function confirmMeeting() {
    Materialize.toast('Successfully scheduled the meeting!', 5000, '', redirect());
}

function redirect() {
    if (typeof(Storage) !== "undefined") {
        let date = $('#meetingDate').val();
        localStorage.setItem('meetingDate', date);
    } else {
        alert("Sorry you don't support local storage!");
    }
}