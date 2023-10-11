$(function () {
  var count;
  var counter;

  $("#request").on("click", function (event) {
    event.preventDefault();

    count = 20;
    updateTimer();

    $("#request").prop("disabled", true);

    clearInterval(counter);

    counter = setInterval(function () {
      count = count - 1;
      updateTimer();

      if (count <= 0) {
        clearInterval(counter);
        $("#request").prop("disabled", false);
        $("#timer").html("");
        return;
      }
    }, 1000);
  });

  function updateTimer() {
    $("#timer").html(count + "s");
  }
});
