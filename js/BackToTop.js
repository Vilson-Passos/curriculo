class BackToTop {
    constructor () {
        this.element = document.querySelector('.footer .footer__btntopo');
        this.element.addEventListener(
            'click', this.handleClick.bind(event, this)
        );
    }

    handleClick(_instance, event) {
        event.preventDefault();
        const scrolling = setInterval(() => {
            if (window.scrollY <= 0) {
                return clearInterval(scrolling); 
            }
            window.scrollTo(window.scrollX, window.scrollY - 100);  
        }, 15);
    }
}