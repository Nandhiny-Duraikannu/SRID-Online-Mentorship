$(function() {
    function init() {
        let video = localStorage.getItem("video");
        let courseTitle = $('#courseTitle');
        let videoLink = $('#videoLink');
        let content1 = $('#test-swipe-1');
        let content2 = $('#test-swipe-2');

        if (video === "default") {
            courseTitle.text("Cloud Computing - 1.2 GCP");
            videoLink.attr("src", "https://www.youtube.com/embed/ae_DKNwK_ms");
            content1
                .append('<table class="centered striped">\
                    <thead><tr><th>ID</th><th>Content</th></tr></thead>\
                    <tbody><tr><td>1.1</td><td>AWS</td></tr><tr><td>1.2</td><td>GCP</td></tr><tr><td>1.3</td><td>Azure</td></tr></tbody>\
                    </table>');
            content2
                    .append('<table class="centered striped">\
                    <thead><tr><th>Course</th><th>Topic</th><th>Time</th></tr></thead>\
                    <tbody><tr><td>Socket</td><td>TCP/IP</td> <td><a onclick="changeVideo()">15:30 - 21:09</a></td></tr><tr><td>AWS Security</td><td>Inbound Setting</td><td><a>07:30 - 11:49</a></td></tr><tr><td>GCP Training</td><td>Terminal</td><td><a>23:29 - 29:52</a></td></tr></tbody>\
                    </table>');
        } else {
            courseTitle.text("Socket - 2.2 TCP/IP");
            videoLink.attr("src", "https://www.youtube.com/embed/PpsEaqJV_A0");
            content1
                .append('<table class="centered striped">\
                    <thead><tr><th>ID</th><th>Content</th></tr></thead><tbody><tr><td>2.1</td><td>Intro</td></tr><tr><td>2.2</td><td>TCP/IP</td></tr></tbody>\
                    </table>');
            content2
                .append('<table class="centered striped">\
                    <thead><tr><th>Course</th><th>Topic</th><th>Time</th></tr></thead><tbody><tr><td>Cloud Computing</td><td>GCP</td><td><a onclick="changeVideo()">3:19 - 21:08</a></td></tr><tr><td>Intro to Internet</td><td>Socket</td><td><a>53:52 - 59:08</a></td></tr></tbody>\
                    </table>');
        }
    }
    init();
});

function changeVideo() {
    let video = localStorage.getItem("video");
    if (video === "default") {
        localStorage.setItem("video", "socket");
    } else {
        localStorage.setItem("video", "default");
    }
    window.location = "video.html";
}