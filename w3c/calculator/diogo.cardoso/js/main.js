const buttons = document.querySelectorAll('button')
const text = document.querySelector('h1')

buttons.forEach(b => b.addEventListener('click', clicar))

function clicar(event) {
    let target = event.target.innerHTML

    if (text.innerHTML === '0') {
        text.innerHTML = ''
    }
    if (target == '=') {
        text.innerHTML = eval(`${text.innerHTML.replace('x', '*')}`)
    }
    if (target === 'AC') {
        text.innerHTML = '0'
    }

    if (text.innerHTML == 'undefined'){
        text.innerHTML = 'ERRO'
    }
    else if (target === '+/-') {
        text.innerHTML = eval(`-1*(${text.innerHTML.replace('x', '*') || 0})`)
    }
    else if (target === '%') {
        text.innerHTML = eval(`(${text.innerHTML.replace('x', '*') || 0})/100`)
    }
    else if ('1234567890+-/'.includes(target)) {
        text.innerHTML += target
    }
    else if (target === 'X') {
        text.innerHTML += 'x'
    }

}