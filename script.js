/**
 * Js event handler to change between Clark and Superman modes.
 *
 */

$('.btn').on('click', function() {
  $('#target').toggleClass('superman');
  $(this).toggleClass('active');
});
