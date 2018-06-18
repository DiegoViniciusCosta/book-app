;(function() {

    'use strict'

    let formFicha = document.querySelector('form')

    formFicha.addEventListener('submit', function(event){
        event.preventDefault()

        let $ = document.querySelector.bind(document)
        let inputNome = $('#nome')
        let inputNomeMae = $('#nomeMae')
        let inputData = $('#data')
        let inputSexo = document.getElementsByName('sexo');

        let inputCpf = $('#cpf')
        let inputRg = $('#rg')
        let inputCnh = $('#cnh')
        let inputEstadoCivil = $('#estadoCivil')

        let inputOcupacoes = $('#ocupacoes')
        let inputProfissao = $('#profissao')
        let inputRenda = $('#renda')
        let inputEmpresa = $('#nomeEmpresa')

        let inputTelefone = $('#telefone')
        let inputTelefone2 = $('#telefone2')
        let inputTelefone3 = $('#telefone3')

        let inputEmail = $('#email')

        let inputCep = $('#cep')
        let inputRua = $('#rua')
        let inputNumero = $('#numero')
        let inputComplemento = $('#complemento')
        let inputBairro = $('#bairro')
        let inputCidade = $('#cidade')
        let inputEstado = $('#uf')

        let inputMarcas = $('#marcas')
        let inputModelos = $('#modelos')
        let inputVersoes = $('#versoes')
        let inputCores = $('#cores')
        let inputPlaca = $('#placas')

        let inputPeriodosContratos = document.getElementsByName('periodoContrato');
        let inputPacotesKm = document.getElementsByName('pacotekm');

        let dadosCliente = {
            nome: inputNome.value,
            nomeMae: inputNomeMae.value,
            data: inputData.value,
            sexo: inputSexo[0].checked ?inputSexo[0].value : inputSexo[1].value,

            cpf: inputCpf.value,
            rg: inputRg.value,
            cnh: inputCnh.value,
            estadoCivil: inputEstadoCivil.value,

            ocupacao: inputOcupacoes.value,
            profissao: inputProfissao.value,
            renda: inputRenda.value,
            empresa: inputEmpresa.value,

            telefone: inputTelefone.value,
            telefone2: inputTelefone2.value,
            telefone3: inputTelefone3.value,

            email: inputEmail.value,

            cep: inputCep.value,
            rua: inputRua.value,
            numero: inputNumero.value,
            bairro: inputBairro.value,
            cidade: inputCidade.value,
            estado: inputEstado.value,
            complemento: inputComplemento.value,

            marcas: inputMarcas.value,
            modelos: inputModelos.value,
            versoes: inputVersoes.value,
            cores: inputCores.value,
            placa: inputPlaca.value,

            contrato: inputPeriodosContratos[0].checked ? inputPeriodosContratos[0].value : '20',
            pacotes: 0
        }

        console.log(dadosCliente)
    })
    

})()

//remove espaços antes ou depois string
//trim()