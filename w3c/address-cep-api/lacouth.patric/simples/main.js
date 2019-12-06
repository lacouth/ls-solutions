const cepInput = document.querySelector('#cep')
const localidade = document.querySelector('#localidade')


function buscaCep(){
    const cep = cepInput.value
    const url = `http://viacep.com.br/ws/${cep}/json/`
    if(cep){ 
        fetch(url)
            .then(resp => resp.json())
            .then(json => atualizaLocalidade(json))
    }
}

function atualizaLocalidade(json){
    localidade.value = json.localidade
}
cepInput.addEventListener('blur',buscaCep)