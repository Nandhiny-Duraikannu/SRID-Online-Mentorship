$(function() {
    function init() {
        let video = localStorage.getItem("video");
        let courseTitle = $('#courseTitle');
        let videoLink = $('.video-container iframe');
        let content1 = $('#test-swipe-1');
        let content2 = $('#test-swipe-2');

        if (video === "default") {
            courseTitle.text("Cloud Computing - 1.2 GCP");
            videoLink.src("https://www.youtube.com/embed/Q8TXgCzxEnw?rel=0");
            content
                .append('<table class="centered striped">\
                    <thead><tr><th>ID</th><th>Content</th></tr></thead>\
                    <tbody><tr><td>1.1</td><td>AWS</td></tr><tr><td>1.2</td><td>GCP</td></tr><tr><td>1.3</td><td>Azure</td></tr></tbody>\
                    </table>')
                .append('<table class="centered striped">\
                    <thead><tr><th>Course</th><th>Topic</th><th>Time</th></tr></thead>\
                    <tbody><tr><td>Socket</td><td>TCP/IP</td> <td><a onclick="chageVideo()">15:30 - 21:09</a></td></tr><tr><td>AWS Security</td><td>Inbound Setting</td><td><a>07:30 - 11:49</a></td></tr><tr><td>GCP Training</td><td>Terminal</td><td><a>23:29 - 29:52</a></td></tr></tbody>\
                    </table>');
        } else {
            
        }
    }
    init();
});

function changeVideo() {
    let video = localStorage.getItem("video");
    if (video === "default") {
        video === "socket";
    } else {
        video === "default";
    }
    window.location = "video.html";
}