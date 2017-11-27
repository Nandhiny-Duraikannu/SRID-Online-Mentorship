function setQuizContent(ind) {
    redirect(ind);
}

function redirect(ind) {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem('quizInd', ind);
        window.location = "../html/view-quiz-content.html";
    } else {
        alert("Sorry you don't support local storage!");
    }
}
