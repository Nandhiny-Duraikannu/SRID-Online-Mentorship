(function ($) {
  $(function () {
    $('.button-collapse').sideNav();
    const photoDom = $("#userImage");
    const nameDom = $("#userName");
    const emailDom = $("#userEmail");
    const status = localStorage.getItem("status");

    if (status === "tutor") {
      photoDom.attr("src", "http://materializecss.com/images/yuna.jpg");
      nameDom.text("Emily (Tutor)");
      emailDom.text("emily0604@cmu.edu");
    } else {
      photoDom.attr("src", "../images/03.png");
      nameDom.text("Andrew (Student)");
      emailDom.text("andrew1212@cmu.edu");
    }
    

  }); // end of document ready
})(jQuery); // end of jQuery name space



