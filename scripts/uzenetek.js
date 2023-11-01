$(function () {
    var modal = $("#myModal");
  
    $(".btn-compose").on("click", function () {
      modal.modal('show');
      console.log("nyit");
    });
  
    modal.find(".close").on("click", function () {
      modal.modal("hide");
    });
  
    $(document).on("click", function (event) {
      if (event.target === modal[0]) {
        modal.modal("hide");
      }
    });
  });
  