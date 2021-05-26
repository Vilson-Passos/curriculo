class Aba {
    constructor () {
        this.tabs = document.querySelectorAll('.main .main__abas__abas');
        this.buttons = document.querySelectorAll('.main .main__abas .main__abas__botao');    

        this.addEventListeners();       
    }

    addEventListeners() {
        this.buttons.forEach(button => button.addEventListener('click', this.handleButtons.bind(event, this)));   
    }

    handleButtons(_instance, event) {
        event.preventDefault();
        const tabNumber = event.currentTarget.id.substr(event.currentTarget.id.length - 1);
        
        _instance.buttons.forEach((button) => {
            if (button.id === 'bt_aba' + tabNumber) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        _instance.tabs.forEach((tab) => {
            if (tab.id === 'aba' + tabNumber) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }

}