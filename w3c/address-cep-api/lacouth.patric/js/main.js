const cepInput = document.querySelector('#cep')
const streetInput = document.querySelector('#street')
const numberInput = document.querySelector('#number')
const neighborhoodInput = document.querySelector('#neighborhood')
const stateInput = document.querySelector('#state')
const cityInput = document.querySelector('#city')
const cepError = document.querySelector('#cepError')

function erroNoCep(){
    cepError.className = ' '
}

function buscaCep(){
    const cep = cepInput.value
    const url = `https://viacep.com.br/ws/${cep}/json/`
    if(cep){ 
        fetch(url)
            .then(resp => resp.json())
            .then(json => atualizaLocalidade(json))
            .catch( () => erroNoCep() )
    }
}

function atualizaLocalidade(json){
    
    streetInput.value = json.logradouro
    numberInput.value = json.unidade
    neighborhoodInput.value = json.bairro
    stateInput.value = json.uf
    cityInput.value = json.localidade
    cepError.className = 'hidden'

}
cepInput.addEventListener('blur',buscaCep)
