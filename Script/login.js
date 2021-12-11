const validationButton = () => {

    let mailInput = document.querySelector('.mail-input');
    let passInput = document.querySelector('.pass-input');

    const mailValue = mailInput.value;
    const passValue = passInput.value;

    if (mailValue === '' && passValue == '') {
        mailInput.classList = 'mail-input-erro';
        passInput.classList = 'pass-input-erro';
        window.alert('[ERRO] - Email e Senha Inválidos!');

        setInterval(() => {
            passInput.classList = 'pass-input'
            mailInput.classList = 'mail-input';
        }, 2500);

    } else if (passValue === '') {
        passInput.classList = 'pass-input-erro';
        window.alert('[ERRO] - Senha Inválida!');

        setInterval(() => {
            passInput.classList = 'mail-input';
        }, 2500);

    } else if (mailValue === '') {
        mailInput.classList = 'mail-input-erro';
        window.alert('[ERRO] - Email Inválido!');

        setInterval(() => {
            mailInput.classList = 'mail-input';
        }, 2500);
    } else {
        const mailValidation = (mailValue) => {
            const mailRegex = /\S+@\S+\.\S+/;
            return mailRegex.test(mailValue);
        }
    
        if (mailValidation(mailValue) === true) {
            mailValue = '';
            passValue = '';

            console.log('Tudo Certo!');
        } else {
            mailInput.classList = 'mail-input-erro';
            window.alert('[ERRO] - Email Inválido!');
    
            setInterval(() => {
                mailInput.classList = 'mail-input';
            }, 2500);
        }
    }
}