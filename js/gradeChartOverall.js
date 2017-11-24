let canvas = $('#myChart');
let data = {
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
            data: [80,90,88,95] ,
        }
    ]
};

let option = {
    showLines: true
};

let myLineChart = Chart.Line(canvas,{
    data: data,
    options: option
});
function adddata(){
    myLineChart.data.datasets[0].data[7] = 50;
    myLineChart.data.labels[7] = "test add";
    myLineChart.update();
}