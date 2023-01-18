document.getElementById('btn').addEventListener('click',Login);
const emailError = document.getElementById('email-error');
const senhaError = document.getElementById('senha-error');
function Login(event) {
 event.preventDefault(); 
    const usuario = document.getElementById('email').value;
    const senha = document.getElementById('senha').value; 
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!usuario.match(emailRegex)){
        emailError.textContent= "Email Inválido";
    }
     if (usuario.match(emailRegex)) { 
       emailError.textContent = "";
     } 
     if (senha.length < 8 ){
        senhaError.textContent = "Digite uma senha de no mínimo 8 caracteres";
     } 
     else if (senha.length >= 7) {
         senhaError.textContent = "";
     }
}


