document.getElementById('btn').addEventListener('click',Login);

function Login(event) {
 event.preventDefault(); 
    const usuario = document.getElementById('email').value;
    const senha = document.getElementById('senha').value; 
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!usuario.match(emailRegex)){
        document.getElementById('email-error').innerHTML = "Email Inválido";
    }
     if (usuario.match(emailRegex)) { 
       document.getElementById('email-error').innerHTML = "Email Válido";
     } 
     if (senha.length < 8 ){
        document.getElementById('senha-error').innerHTML = "Digite uma senha de no mínimo 8 caracteres";
     } 
     else if (senha.length >= 7) {
        document.getElementById('senha-error').innerHTML = "";
     }
}


