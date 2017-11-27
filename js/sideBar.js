(function ($) {
  $(function () {
    $('.button-collapse').sideNav();
    const nameDom = $("#userName");
    const emailDom = $("#userEmail");
    const status = localStorage.getItem("status");

    if (status === "tutor") {
      nameDom.text("Emily");
      emailDom.text("emily0604@cmu.edu");
    } else {
      nameDom.text("Andrew");
      emailDom.text("andrew1212@cmu.edu");
    }
    

  }); // end of document ready
})(jQuery); // end of jQuery name space



