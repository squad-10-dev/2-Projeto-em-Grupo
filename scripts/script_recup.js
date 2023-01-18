
document.getElementById('btn2').addEventListener('click',recup);
const emailError2 = document.getElementById('email-error2');
const emailConfirmError2 = document.getElementById('emailConfirm-error2');
function recup(event) {
    event.preventDefault(); 
       const usuario = document.getElementById('emailRec1').value;
       const usuarioConfirm = document.getElementById('emailRec2').value; 
       const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       if (!usuario.match(emailRegex)){
           emailError2.textContent = "Email Inválido";
       }
        else if (usuario.match(emailRegex)) { 
            emailError2.textContent = "";
}       if (usuario != usuarioConfirm && usuario.match(emailRegex) ){
       emailConfirmError2.textContent = "Os e-mails não conferem, por favor verifique!";
}       else if (usuario == usuarioConfirm && usuario.match(emailRegex)){
        emailConfirmError2.textContent = "Endereço de e-mail confirmado, por favor verifique seu e-mail";
        emailConfirmError2.style.color = 'green' ;
}
}
