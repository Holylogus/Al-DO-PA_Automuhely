$("#submit").on("click", function (event) {
  event.preventDefault();
});
    event.preventDefault();
})

$(document).ready(function () {
    $(".menuElem").mouseenter(function () {
      $(this).find(".almenu").show();
    });

    $(".menuElem").mouseleave(function () {
      $(this).find(".almenu").hide();
    });
  });
