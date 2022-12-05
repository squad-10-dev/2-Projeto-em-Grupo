const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputEmail = e.target.querySelector('#email');
    const inputSenha = e.target.querySelector('#senha');

    const email = inputEmail.value;
    const senha = inputSenha.value;

    if (email !== Login.email || senha !== Login.senha) {
        setResultado("E-mail ou senha inválida.", false);
        
    } else {const msg = `Login realizado com sucesso.`;
    setResultado(msg, true);
    window.location.href = '../index.html';
    }
});
