

//Menüből a szekcióba ugrás
(function () {
    var navLinks = $('nav ul li a'),
        navMagassag = $('nav').height(),
        section = $('section'),
        documentElem = $(document);
        
    
        

    documentElem.on('scroll', function () {
        var currentScrollPos = documentElem.scrollTop();

        section.each(function () {
            var self = $(this);
            if (self.offset().top < (currentScrollPos + navMagassag) && (currentScrollPos + navMagassag) <
                (self.offset().top + self.outerHeight())) {
          var targetClass = '.' + self.attr('id') + '-marker';
                navLinks.removeClass('active');
                $(targetClass).addClass('active');
            }
        });
        

    });



})();
 

//Hamburger csukódás
$(document).on('click','#navcol-1',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
        $(this).collapse('hide');
  }
});



