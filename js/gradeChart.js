const canvas = $('#myChart');
const data0 = {
    labels: ["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4"],
    datasets: [
        {
            label: "Class Average",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#141212",
            borderColor: "#141212",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#141212",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#141212)",
            pointHoverBorderColor: "#141212",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [80, 90, 88, 95],
        },
        {
            label: "Andrew's score",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#FF3643",
            borderColor: "#FF3643",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#FF3643",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#FF3643",
            pointHoverBorderColor: "#FF3643",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [88, 95, 70],
        }
    ]
};
const data1 = {
    labels: ["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4"],
    datasets: [
        {
            label: "Class Average",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#141212",
            borderColor: "#141212",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#141212",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#141212)",
            pointHoverBorderColor: "#141212",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [80, 90, 88, 95],
        },
        {
            label: "Andrew's score",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#FF3643",
            borderColor: "#FF3643",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#FF3643",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#FF3643",
            pointHoverBorderColor: "#FF3643",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [88, 95, 70, 35],
        }
    ]
};

const option = {
    showLines: true
};


function adddata() {
    myLineChart.data.datasets[0].data[7] = 50;
    myLineChart.data.labels[7] = "test add";
    myLineChart.update();
}
$(function () {
    function init() {
        const numberOfScore = localStorage.getItem('numberOfScore');
        if (numberOfScore === "4") {
            const myLineChart = Chart.Line(canvas, {
                data: data1,
                options: option
            });
            $('#scoreList').html("<thead>\
            <tr>\
                <th>Title</th>\
                <th>Score/100</th>\
                <th></th>\
            </tr>\
            </thead>\
            <tbody>\
            <tr>\
                <td>Quiz 1</td>\
                <td>88</td>\
                <td><a class='waves-effect waves-light btn' onclick='setQuizContent(1)'>View Quiz Content</a></td>\
            </tr>\
            <tr>\
                <td>Quiz 2</td>\
                <td>95</td>\
                <td><a class='waves-effect waves-light btn' onclick='setQuizContent(2)'>View Quiz Content</a></td>\
            </tr>\
            <tr>\
                <td>Quiz 3</td>\
                <td>70</td>\
                <td><a class='waves-effect waves-light btn' onclick='setQuizContent(3)'>View Quiz Content</a></td>\
            </tr>\
            <tr>\
                <td>Quiz 4</td>\
                <td>35</td>\
                <td><a class='waves-effect waves-light btn' onclick='setQuizContent(4)'>View Quiz Content</a></td>\
            </tr>\
            </tbody>")
        } else {
            const myLineChart = Chart.Line(canvas, {
                data: data0,
                options: option
            });
            $('#scoreList').html("<thead>\
            <tr>\
                <th>Title</th>\
                <th>Score/100</th>\
                <th></th>\
            </tr>\
            </thead>\
            <tbody>\
            <tr>\
                <td>Quiz 1</td>\
                <td>88</td>\
                <td><a class='waves-effect waves-light btn' onclick='setQuizContent(1)'>View Quiz Content</a></td>\
            </tr>\
            <tr>\
                <td>Quiz 2</td>\
                <td>95</td>\
                <td><a class='waves-effect waves-light btn' onclick='setQuizContent(2)'>View Quiz Content</a></td>\
            </tr>\
            <tr>\
                <td>Quiz 3</td>\
                <td>70</td>\
                <td><a class='waves-effect waves-light btn' onclick='setQuizContent(3)'>View Quiz Content</a></td>\
            </tr>\
            </tbody>");
        }
    }
    init();
});