
$(function() {
  // Handler for .ready() called.

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$('.form__botton').click(function(){
$('.form__modal').modal('show');
})


});


