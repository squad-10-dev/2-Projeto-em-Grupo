$(document).ready(function() {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    }
    
    //Quando o campo cep perde o foco.
    $("#cep").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#rua").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");
                $("#ibge").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                        $("#ibge").val(dados.ibge);
                        document.getElementById("cep-error").style.display="none";
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        document.getElementById("cep-error").innerHTML ="CEP não encontrado.";
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                document.getElementById("cep-error").innerHTML ="Formato de CEP inválido.";
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            document.getElementById("cep-error").innerHTML = "Digite um CEP válido";
            limpa_formulário_cep();
        }
    });
});

document.getElementById("submit").addEventListener('click',validate);

function validate(event){
    event.preventDefault()

    const email =  document.getElementById('email').value ;
    const senha =  document.getElementById('senha').value ;
    const senhaCon =  document.getElementById('senhaCon').value ;
    const cpf =  document.getElementById('cpf').value ;
    const cep =  document.getElementById('cep').value ;
    const termos = document.getElementById('termos').checked ;
    const news = document.getElementById('news').checked ;

    let ok1 = false;
    let ok2 = false;
    let ok3 = false;
    let ok4 = false;
    let ok5 = false;
    // console.log('');

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if (email.match(emailRegex)){
    document.getElementById("email-error").innerHTML = "";
    ok1 = true;
}
else {
    document.getElementById("email-error").innerHTML = "Digite um endereço de e-mail válido";
}

if(senha != senhaCon){
    document.getElementById("senha-error").innerHTML = "As senhas digitadas não conferem";
    ok2 = false;
} 
else if (senha =='' || senhaCon ==''){
    document.getElementById("senha-error").innerHTML = "Digite uma senha";
    ok2 = false;
}
else {
    document.getElementById("senha-error").style.display = "none";
    ok2 = true;
}
if(cep.length != 9 || cep == NaN){
    document.getElementById("cep-error").innerHTML = "Digite um CEP válido";
    ok3 = false;
}
else{
    document.getElementById("cep-error").style.display = "none";
    ok3 = true;
}
if (cpf.length != 14){
    document.getElementById("cpf-error").innerHTML = "Digite um cpf válido";
    ok4 = false;
}
else{
    document.getElementById("cpf-error").style.display = "none";
    ok4 = true;
    
}
if(termos==false){
    document.getElementById("termos-error").innerHTML = "Você precisa estar de acordo com nossos termos e condições";
    ok5 = false;
}else if(termos == true){
    document.getElementById("termos-error").style.display = "none";
    ok5 = true;
}
if ( ok1 && ok2 && ok3 && ok4 && ok5 == true){
    document.getElementById("sucesso").style.display ="block";
}else{
    document.getElementById("sucesso").style.display ="none";
}
}



function mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }