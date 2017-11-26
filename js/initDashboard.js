$(function() {
    function init() {
        let status = localStorage.getItem("status");
        let events = localStorage.getItem("events");
        let courses = localStorage.getItem("courses");

        let eventsDom = $(".collapsible li");
        let coursesDom = $("#courseList");
        if (status === "tutor" && events === "default" && courses === "default") {
            eventsDom.append("<div class='collapsible-header'>No upcoming events!</div>");
            coursesDom.append('<div class="card blue-grey darken-1">\
                <div class="card-content white-text">\
                <span class="card-title" >No courses</span>\
                </div></div>');
        } else if (status === "tutor" && events === "meeting" && courses === "default") {
            eventsDom.append("<div class='collapsible-header'><a href='meeting-detail.html'>1:1 meeting with Andrew</a></div>");
            coursesDom.append('<div class="card blue-grey darken-1">\
            <div class="card-content white-text" >\
                <span class="card-title" ><a class="grey-text text-lighten-3" href="course-dashboard.html">\
                <i class="material-icons">cloud</i> sC1. Cloud Computing</a></span>\
            </div></div>');
        } else if (status === "tutor" && events === "default" && courses === "addedCourse") {
            Materialize.toast('Successfully register the course!', 5000);
            eventsDom.append("<div class='collapsible-header'>No upcoming events!</div>");
            coursesDom.append('<div class="card blue-grey darken-1">\
            <div class="card-content white-text" >\
                <span class="card-title" ><a href="course-dashboard.html" class="grey-text text-lighten-3" >\
                <i class="material-icons">cloud</i> C1. Cloud Computing</a></span>\
            </div></div>');
        } else if (status === "tutor" && events === "meeting" && courses === "addedCourse") {
            eventsDom.append("<div class='collapsible-header'><a href='meeting-detail.html'>1:1 meeting with Andrew</a></div>");
            coursesDom.append('<div class="card blue-grey darken-1">\
            <div class="card-content white-text" >\
                <span class="card-title" ><a href="course-dashboard.html" class="grey-text text-lighten-3">\
                <i class="material-icons">cloud</i> C1. Cloud Computing</a></span>\
            </div></div>');
        } else if (status === "student" && events === "default" && courses === "default") {
            eventsDom
                .append('<div class="collapsible-header">Cloud Computing Phase 3 Due Nov 10,3 pm</div>');
            coursesDom
                .append('<div class="card blue-grey darken-1">\
                    <div class="card-content white-text" >\
                    <span class="card-title" ><a class="grey-text text-lighten-3" href="course-dashboard.html">\
                    <i class="material-icons">cloud</i> C1. Cloud Computing</a></span>\
                    </div></div>')
                .append('<div class="card blue-grey darken-1">\
                    <div class="card-content white-text" >\
                    <span class="card-title" ><a class="grey-text text-lighten-3" onclick="setDisabledBtn()">\
                    <i class="material-icons">insert_chart</i> C4. Machine Learning</a></span>\
                    </div></div>')
                .append('<div class="card blue-grey darken-1">\
                    <div class="card-content white-text" >\
                    <span class="card-title" ><a class="grey-text text-lighten-3" onclick="setDisabledBtn()">\
                    <i class="material-icons">trending_up</i> C5. An Intuitive Introduction to Probability</a></span>\
                    </div></div>');
                    
        } else if (status === "student" && events === "meeting" && courses === "default") {
            eventsDom
                .append('<div class="collapsible-header"><a href="meeting-detail.html">1:1 meeting with Emily</a></div>')
                .append('<div class="collapsible-header">Cloud Computing Phase 3 Due Nov 10,3 pm</div>');
            coursesDom
                .append('<div class="card blue-grey darken-1">\
                    <div class="card-content white-text" >\
                    <span class="card-title" ><a class="grey-text text-lighten-3" href="course-dashboard.html">\
                    <i class="material-icons"> cloud</i>C1. Cloud Computing</a></span>\
                    </div></div>')
                .append('<div class="card blue-grey darken-1">\
                    <div class="card-content white-text" >\
                    <span class="card-title" ><a class="grey-text text-lighten-3" onclick="setDisabledBtn()">\
                    <i class="material-icons"> insert_chart</i>C4. Machine Learning</a></span>\
                    </div></div>')
                .append('<div class="card blue-grey darken-1">\
                    <div class="card-content white-text" >\
                    <span class="card-title" ><a class="grey-text text-lighten-3" onclick="setDisabledBtn()">\
                    <i class="material-icons"> trending_up</i>C5. An Intuitive Introduction to Probability</a></span>\
                    </div></div>');
                    
        }
    
    }
    init();
});