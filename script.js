function contar(){
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let pas = document.querySelector('#txtp')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
    }  else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            for(let c = i; c <= f; c+= p){
                res.innerHTML += ` ${c}`
            }
        } else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c}`
            }
        }
    }
}