let canvas = $('#myChart');
let data0 = {
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
        }
    ]
};
let data1 = {
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

let option = {
    showLines: true
};

function adddata() {
    myLineChart.data.datasets[0].data[7] = 50;
    myLineChart.data.labels[7] = "test add";
    myLineChart.update();
}

$(function () {
    function init() {
        let status = localStorage.getItem('status');
        if (status === "student") {
            let myLineChart = Chart.Line(canvas, {
                data: data1,
                options: option
            });
        } else {
            let myLineChart = Chart.Line(canvas, {
                data: data0,
                options: option
            });
        }
    }
    init();
});