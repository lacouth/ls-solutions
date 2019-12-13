// TODO
let hoteis = document.querySelector('#hoteis div div')
let gastronomia = document.querySelector("#gastronomia div div")
let tortas = document.querySelector("#tortas div div")
let entretenimento = document.querySelector("#entretenimento div div")
let saude = document.querySelector("#saude div div")
let servicos = document.querySelector("#servicos div div")

function inserirOfertas(json,cat){
    
    let inner = json.reduce((acc,v)=>{
        return acc+=
        `<div class="col">
            <div id="offer-${v.id}" class="card card-block offer">
                <div class="offer-thumb" style="background-image: url(${v.image.url})"></div>
                <div class="offer-content p-4">
                    <div class="offer-title">${v.title}</div>
                    <div class="offer-price"><span>R$</span> ${Number(v.price).toLocaleString('pt-BR',{minimumFractionDigits: 2})}</div>
                    <div class="offer-market-price"><span>R$</span> ${Number(v.market_price).toLocaleString('pt-BR',{minimumFractionDigits: 2})}</div>
                </div>
            </div>
        </div>`
    },'')
    cat.innerHTML = inner
}

function filtrarJSON(json,categorias){
    json_hoteis = json.filter( v => categorias[v.id] == "hoteis")
    inserirOfertas(json_hoteis,hoteis)
    json_gastronomia = json.filter( v => categorias[v.id] == "gastronomia")
    inserirOfertas(json_gastronomia,gastronomia)
    json_tortas = json.filter( v => categorias[v.id] == "tortas")
    inserirOfertas(json_tortas,tortas)
    json_entretenimento = json.filter( v => categorias[v.id] == "entretenimento")
    inserirOfertas(json_entretenimento,entretenimento)
    json_entretenimento = json.filter( v => categorias[v.id] == "entretenimento")
    inserirOfertas(json_entretenimento,entretenimento)
    json_saude = json.filter( v => categorias[v.id] == "saude")
    inserirOfertas(json_saude,saude)
    json_servicos = json.filter( v => categorias[v.id] == "servicos")
    inserirOfertas(json_servicos,servicos)
}

fetch('../data/categories.json')
.then(res => res.json())
.then(categorias => {
    fetch('https://playground.barato.com.br/desafio-front/api/offers')
    .then(res => res.json())
    .then(json => filtrarJSON(json,categorias))
})