class RegisterButton {
    constructor() {
        this.registerButton = document.querySelector('.register-button');
        this.registerOptions = document.querySelector('.register-options');
        this.registerButton.addEventListener('click', this.toggleOptions.bind(this));
        document.addEventListener('click', this.hideOptions.bind(this));
    }

    toggleOptions(event) {
        event.stopPropagation();
        this.registerOptions.style.display = this.registerOptions.style.display === 'block' ? 'none' : 'block';
    }

    hideOptions(event) {
        if (event.target !== this.registerButton) {
            this.registerOptions.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new RegisterButton();
});