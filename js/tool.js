//選單下拉
// $(document).ready(function() {
//       (function($) {
//       var fold = $('ul.menu__item-ul').prev();
//       fold.addClass('dir').attr('href', '#');
//       fold.on('click', function() {
//         var $this = $(this);
//         $this.toggleClass('hide');
//         $this.next().toggle('300');
//       });
//     })(jQuery);

// });
//毛點滑動
$(document).ready(function() {
  function ScrollTo(id_name) {
    $('html,body').animate({
    scrollTop: $('#'+id_name).offset().top}, 1000);
    }
});