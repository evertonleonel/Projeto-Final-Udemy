(function () {
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    var menu = new Menu({
        container: '.header__nav',
        toggleBtn:'.header__btnMenu',
        widthEnabled:1024
        // o widthEnabled é o tamanho da mediaQerry que colocamos
    })
    
    var carrouselImgs = new Carrousel({
        container: ' .laptop-slider .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })


    var carrouselQuotes = new Carrousel({
        container: ' .quote-slide',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

})()