class CriaCadastro {
    
    constructor(){
        let $ = document.querySelector.bind(document)
        this._inputNome = $('#nome')
        this._inputNomeMae = $('#nomeMae')
        this._inputData = $('#data')
        this._inputSexoMasc = $('#sexoMasc')
        this._inputSexoFem = $('#sexoFem')
    }

    insereInfo(event){
        return new MontaCadastro(
            this._inputNome.value,
            this._inputNomeMae.value,
            this._inputData.value,
            this._inputSexoMasc.value,
            this._inputSexoFem.value
        )
    }

}