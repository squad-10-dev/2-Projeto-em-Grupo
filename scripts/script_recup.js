
document.getElementById('btn2').addEventListener('click',Login);

function Login(event) {
    event.preventDefault(); 
       const usuario = document.getElementById('emailRec1').value;
       const usuarioConfirm = document.getElementById('emailRec2').value; 
       const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       if (!usuario.match(emailRegex)){
           document.getElementById('email-error2').innerHTML = "Email Inválido";
       }
        else if (usuario.match(emailRegex)) { 
          document.getElementById('email-error2').innerHTML = "Email Válido";
}       if (usuario != usuarioConfirm && usuario.match(emailRegex) ){
        document.getElementById('emailConfirm-error2').innerHTML = "Os e-mails não conferem, por favor verifique!";
}       else if (usuario == usuarioConfirm && usuario.match(emailRegex)){
    document.getElementById('emailConfirm-error2').innerHTML = "Endereço de e-mail confirmado, por favor verifique seu e-mail";
}
}
