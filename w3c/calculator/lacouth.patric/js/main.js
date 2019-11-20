let buttons = Array.from(document.querySelectorAll('button'))
let display = document.querySelector('h1')

buttons.map( b => b.addEventListener('click',()=>calculadora(b.innerHTML)))

let exp = ''
let flag = false
function calculadora(tecla){
   
    switch( tecla ){
       case 'AC':
           exp = ''
           break
        case '+/-':
            exp = eval('-1'*exp)
            break
        case '%':
            exp = eval(exp/100)
            break
        case '=':
            exp = eval(exp)
            flag = true
            break
        case 'X':
            exp+='*'
            break
        default:
            if( !flag ){
                exp+=tecla
            } else {
                exp = tecla
                flag = false
            }
   }
    display.innerHTML = exp
}



