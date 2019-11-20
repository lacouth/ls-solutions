let buttons = Array.from(document.querySelectorAll('button'))
let textarea = document.querySelector('textarea')

buttons.map(b => b.addEventListener('click',()=>textUtil(b.innerHTML)))

function textUtil(btn){
    let texto = textarea.value
    switch(btn){
        case 'Lowercase':
                texto = texto.toLowerCase()
                break
        case 'Uppercase':
                texto = texto.toUpperCase()
                break
        case 'Capitalize':
                texto = texto.split(' ')
                    .map(b =>{
                        let r = b.split('')
                        r[0] = r[0].toUpperCase()
                        return r.join('')
                    })
                    .join(' ')
                    break
        case 'Snake':
                texto = texto.split('')
                             .map(l => l == ' ' ? '_':l)
                             .join('')
                break
        case 'Reverse':
                texto = texto.split('')
                             .reverse()
                             .join('')
                break
        case 'Character Count':
                texto = texto.split('').length
                break
        case 'Word Count':
                texto = texto.split('')
                            .reduce((acc,l)=>(l==' ' || l=='\n')? acc+1:acc,1)
                break
        case 'Line Count':
                texto = texto.split('')
                             .reduce((acc,l) => l == '\n' ? acc+1 : acc,1)
                break
    }
    textarea.value = texto
}