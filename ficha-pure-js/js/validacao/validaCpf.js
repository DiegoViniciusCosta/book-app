document.querySelector(".form-ficha").onsubmit = function (event){
  if ( CPF.validate(document.getElementById('cpf').value) === true ) {
    var mensagem = 'CPF Válido';
  }else{
    var mensagem = 'CPF Inválido';
  }

  console.log(mensagem);
};