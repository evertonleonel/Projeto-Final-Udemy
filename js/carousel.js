function carrousel(config){
    this.container = ( typeof config.container === 'string') ? document.querySelector(config.container) : config.container;

    this.itens = (typeof config.itens === 'string') ? this.container.querySelectorAll('this.itens') : config.itens

    this.btnPrev = (typeof config.btnPrev  === 'string') ? this.container.querySelectorAll('this.btnPrev ') : config.btnPrev 

    this.btnNext = (typeof config.btnNext === 'string') ? this.container.querySelectorAll('this.btnNext') : config.btnNext

    var _this = this;
    var _currentSlide = 0

    init()

    function init (){
        var _show = _this.container.querySelectorAll('.show')

        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('show')
        })

        _this.itens[0].classList.add('show')
        _this.btnNext.removeAttribute('style')
        _this.btnPrev.removeAttribute('style')

        addEventListeners()

    }
    
    function addEventListeners(){
        _this.btnNext.addEventListeners('click', showNextSlide)
        _this.btnPrev.addEventListeners('click', showNextSlide)
    }

    function showNextSlide(){
        _currentSlide++;
        showSlide()
    }

    function showSlide(){
        var qtd = _this.itens.length;
        var slide = _currentSlide % qtd;
        slide = Math.abs(slide);

        _this.container.querySelector('.show').classList.remove('show');
        _this.itens[slide].classList.add('show');
    }

}