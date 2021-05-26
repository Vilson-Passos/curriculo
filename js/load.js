const load = () => {
    const backToTop = new BackToTop();
    const skills = new Skills();
    const tab = new Aba();
}

function enviar() {
    const loading = document.querySelector('.loading');
    loading.className = loading.className + ' show';

    const name = document.querySelector('.field_name').value;
    const subject = document.querySelector('.field_subject').value;
    const email = document.querySelector('.field_email').value;
    const message = document.querySelector('.field_message').value;

    const msg = {
        from:'vilson.passos@yahoo.com.br',
        to:'vilson.passosss@gmail.com',
        subject:    `${subject}`,
        text:       `
            Nome de quem entrou em contato: ${name}
            Email de quem entrou em contato: ${email}
            
            Mensagem: ${message}
        `
    };

    fetch(
        'https://fiap-sender.herokuapp.com/email/send',
        {
            method:'POST',
            headers: {
                'Accept':'*/*',
                'Content-Type':'application/json',
                'accept-encoding':'gzip, deflate',
            },
            body: JSON.stringify(msg),
        }
    )
        .then(data => {
            loading.className = loading.className.replace('show', '');
            alert('Mensangem enviada com sucesso!');
            
        })
        .catch(err => {
            loading.className = loading.className.replace('show', '');
            alert('Erro ao enviar mensagem. Tente novamente!');
        });
}