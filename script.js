/**
 * Js event handler to change between Clark and Superman modes.
 *
 * @author Ezequiel Calvo <ezecafre@gmail.com> 
 *                        Follow me @EzequielCalvo
 *                        Hashtag #CSSDrawing #Minion
 */

$('.btn').on('click', function() {
  $('#target').toggleClass('superman');
  $(this).toggleClass('active');
});