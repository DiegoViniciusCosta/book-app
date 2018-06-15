let criaCadastro = function(event) {
    event.preventDefault()

    let $ = document.querySelector.bind(document)
    inputNome = $('#nome')
    inputNomeMae = $('#nomeMae')
    inputData = $('#data')
    inputSexo = document.getElementsByName('sexo');

    inputCpf = $('#cpf')
    inputRg = $('#rg')
    inputCnh = $('#cnh')
    inputEstadoCivil = $('#estadoCivil')

    inputOcupacoes = $('#ocupacoes')
    inputProfissao = $('#profissao')
    inputRenda = $('#renda')
    inputEmpresa = $('#nomeEmpresa')

    inputTelefone = $('#telefone')
    inputTelefone2 = $('#telefone2')
    inputTelefone3 = $('#telefone3')
    
    inputEmail = $('#email')

    inputCep = $('#cep')
    inputEndereco = $('#endereco')
    inputNumero = $('#numero')
    inputComplemento = $('#complemento')
    inputBairro = $('#bairro')
    inputCidade = $('#cidade')
    inputEstado = $('#estado')
    
    inputMarcas = $('#marcas')
    inputModelos = $('#modelos')
    inputVersoes = $('#versoes')
    inputCores = $('#cores')
    inputPlaca = $('#placas')
    
    inputPeriodosContratos = document.getElementsByName('periodoContrato');
    inputPacotesKm = document.getElementsByName('pacotekm');

    let dadosCliente = {
        nome: inputNome.value,
        nomeMae: inputNomeMae.value,
        data: inputData.value,
        sexo: inputSexo[0].checked ? this.inputSexo[0].value : this.inputSexo[1].value,

        cpf: inputCpf.value,
        rg: inputRg.value,
        cnh: inputCnh.value,
        estadoCivil: inputEstadoCivil.value,

        ocupacao : inputOcupacoes.value,
        profissao : inputProfissao.value,
        renda : inputRenda.value,
        empresa : inputEmpresa.value,

        telefone : inputTelefone.value,
        telefone2 : inputTelefone2.value,
        telefone3 : inputTelefone3.value,
        
        email : inputEmail.value,

        cep : inputCep.value,
        endereco : inputEndereco.value,
        numero : inputNumero.value,
        complemento : inputComplemento.value,
        bairro : inputBairro.value,
        cidade : inputCidade.value,
        estado : inputEstado.value,
        
        marcas : inputMarcas.value,
        modelos : inputModelos.value,
        versoes : inputVersoes.value,
        cores : inputCores.value,
        placa : inputPlaca.value,
        
        contrato: inputPeriodosContratos[0].checked ? inputPeriodosContratos[0].value : '20',
        pacotes: inputSexo[0].checked ? this.inputSexo[0].value : this.inputSexo[1].value,
    }

    console.log(dadosCliente)
}
