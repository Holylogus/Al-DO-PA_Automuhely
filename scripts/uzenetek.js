$(function () {
  var modal = $("#myModal");

  $(".btn-compose").on("click", function () {
    modal.modal("show");
  });

  modal.find(".close").on("click", function () {
    modal.modal("hide");
  });

  $(document).on("click", function (event) {
    if (event.target === modal[0]) {
      modal.modal("hide");
    }
  });
  // Csatolt fájlok elérési útvonala, neve
  $(".fileinput-button").on("change", function () {
    var fajlUt = $(this).children("input").val();
    var fajlNev = fajlUt.replace("C:\\fakepath\\", " ");
    $(".csatoltFajlok").append(
      `<i class="fa fa-paperclip"></i>`,
      fajlNev,
      `<span class=torolGomb>&nbsp;❌&nbsp;</span>`
    );
  });

  $(".csatoltFajlok").on("click", ".torolGomb", function () {
    console.log("Törlés gomb");
  });
});
