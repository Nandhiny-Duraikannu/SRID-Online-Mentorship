$(function () {
    function init() {
        const quizInd = localStorage.getItem('quizInd');
        const status = localStorage.getItem("status");
        const breadcrumbDom = $('#quizContentBreadCrumb');

        if (status === "tutor") {
            breadcrumbDom
                .append('<a class="breadcrumb">...</a>')
                .append('<a href="view-grades.html" class="breadcrumb">Andrew</a>')
                .append('<a class="breadcrumb">Quiz Content</a>');
        } else {
            breadcrumbDom
                .append('<a class="breadcrumb">...</a>')
                .append('<a href="view-grades.html" class="breadcrumb">View Grades</a>')
                .append('<a class="breadcrumb">Quiz Content</a>');
        }
        if (quizInd === "undefined") {
            quizInd = "";
        }
        if (quizInd === "1") {
            $('#quizContent').html('<p> Q1: What is GCP?<p> Answer: Google Cloud Platform</p>\
        <p> Comment: Correct</p><br>\
        <p> Q2: What is AWS?</p>\
        <p> Answer: Awesome Wow System</p>\
        <p> Comment: InCorrect. Answer is Amazon web services.</p><br>\
        <p> Q3: What are the advantages of using cloud computing?</p>\
        <p> Answer: Data backup and storage of data, Powerful server capabilities, SaaS</p>\
        <p> Comment: Correct</p>');
            $('#quizBreadCrumb').text('Quiz1');
            $('#quizTitle').text('Quiz 1 Solution');
        } else if (quizInd === "2") {
            $('#quizContent').html('<p> Q1: List down the three basic clouds in cloud computing?</p>\
            <p> Answer: Professional cloud, Personal cloud, Performance cloud</p>\
            <p> Comment: Correct</p><br>\
            <p> Q2: Mention the services that are provided by Window Azure Operating System?</p>\
            <p> Answer:  Compute, Storage, Management</p>\
            <p> Comment: Correct. </p><br>\
            <p> Q3:  In cloud architecture what are the different components that are required?</p>\
            <p> Answer: Cloud Ingress, Processor Speed, Cloud storage services, Cloud provided services, Intra-cloud communications</p>\
            <p> Comment: Correct</p>');
            $('#quizBreadCrumb').text('Quiz2');
            $('#quizTitle').text('Quiz 2 Solution');
        } else if (quizInd === "3") {
            $('#quizContent').html('<p> Q1: Please describe the process of initiating a EC2 service?</p>\
            <p> Answer: I dont know...</p>\
            <p> Comment: Incorrect, please refer the AWS manual</p>');
            $('#quizBreadCrumb').text('Quiz3');
            $('#quizTitle').text('Quiz 3 Solution');
        } else {
            $('#quizContent').html('<p> Q1: Mention platforms which are used for large scale cloud computing?</p>\
            <p> Answer: Apache Hadoop, MapReduce</p>\
            <p> Comment: Correct</p><br>\
            <p> Q2: Explain different models for deployment in cloud computing?</p>\
            <p> Answer: Private Cloud</p>\
            <p> Comment: InCorrect. </p><br>\
            <p> Q3: What is the requirement of virtualization platform in implementing cloud?</p>\
            <p> Answer: Data backup , Powerful server capabilities</p>\
            <p> Comment: InCorrect. Answer is Compliance, Loss of data, Data storage, Business continuity, Uptime, Data integrity in cloud computing</p>');
            $('#quizBreadCrumb').text('Quiz4');
            $('#quizTitle').text('Quiz 4 Solution');
        }
    }
    init();
});