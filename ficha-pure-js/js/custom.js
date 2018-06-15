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

    inputOcupacao = $('#ocupacao')
    inputProfissao = $('#profissao')
    <input type="text" id="renda" placeholder="Renda">
    <input type="text" id="nomeEmpresa" placeholder="Nome da Empresa">

    <!--INPUT TELEFONE -->
    <input type="text" id="telefone" placeholder="telefone">
    <!--/INPUT TELEFONE-->
    
    <input type="email" id="email" placeholder="Email">

    <!--ENDEREÇO-->
    <input type="text" id="cep" placeholder="CEP">
    <input type="endereco" id="endereco" placeholder="Endereço">
    <input type="text" id="numero" placeholder="Número">
    <input type="text" id="complemento" placeholder="Complemento">
    <input type="text" id="bairro" placeholder="Bairro">
    <input type="text" id="cidade" placeholder="Cidade">
    <input type="text" id="estado" placeholder="Estado">
    <!--/ENDEREÇO-->

    <!--Dados do carro-->
    <select name="marcas" id="marcas">
        <option value="onix">Onix</option>
    </select>
    <select name="modelos" id="modelos">
        <option value="1.4 Altras">1.4 Altras</option>
    </select>
    <select name="versoes" id="versoes">
        <option value="versaoPa">Versão Pá</option>
    </select>
    <select name="cores" id="cores">
        <option value="vermelho">Vermelho</option>
    </select>
    <select name="marcas" id="marcas">
        <option value="marca">Marca</option>
    </select>
    
    <!--PERÍODO DE CONTRATO-->
    <input type="text" id="periodoContrato" placeholder="Período de Contrato">
    <input type="text" id="pacotekm" placeholder="Pacote de KM">
    <!--/PERÍODO DE CONTRATO-->

    <!--VALOR DA PARCELA-->
    <h2>Valor da parcela</h2>
    <!--/VALOR DA PARCELA-->


    let dadosCliente = {
        nome: inputNome.value,
        nomeMae: inputNomeMae.value,
        data: inputData.value,
        sexo: inputSexo[1].checked ? 'masculino' : 'Feminino' 
    }

    console.log(dadosCliente)
}
