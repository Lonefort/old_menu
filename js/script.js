$(function() {
  $("#conv-dropdown-toggle").on("click", function(e) {
    $(this).toggleClass('deactive');
    $('#conv-dropdown-content').toggleClass('deactive');
    e.stopPropagation()
  });
});
