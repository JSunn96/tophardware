var $modules = $('.module');
$(window).scroll(function(event) {
  $modules.each(function(i, el) {
    var $el = $modules.eq(i);
    if ($el.visible(true)) {
      $modules
        .splice(i, 1);
      $el
        .addClass("come-in")
        .removeClass('module');
    } 
  });
});