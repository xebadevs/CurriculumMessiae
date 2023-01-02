$(function () {
  let contentFile = $("[data-origin]");
  $.each(contentFile, function () {
    let file = "pages/" + $(this).data("origin") + ".html";
    $(this).load(file);
  });
});
