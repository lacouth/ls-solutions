// TODO
let ofertas = document.querySelector('#ofertas_div')


function inserirOfertas(json){
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
    ofertas.innerHTML = inner
}


fetch('https://playground.barato.com.br/desafio-front/api/offers')
.then(res => res.json())
.then(json => inserirOfertas(json))