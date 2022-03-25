function calc() {
    function rep() {
        if (n < f) {
            while (n <= f) {
                res.innerHTML += `${n}, `
                n += int
            }
        } else if (n > f) {
            while (n >= f) {
                res.innerHTML += `${n}, `
                n -= int
            }
        } else {
            res.innerHTML = 'Impossível contar'
        }
    }

    n = document.getElementById('ini').valueAsNumber
    var f = document.getElementById('fim').valueAsNumber
    var int = document.getElementById('int').valueAsNumber
    var res = document.getElementById('res')
    res.innerHTML = 'Contando...<br>'
    if (int == 0) {
        window.alert('Passo INVÁLIDO considerando PASSO 1')
        int = 1
        rep()
    } else {
        rep()
    }
}
function limp() {
    document.getElementById('ini').value = ''
    document.getElementById('fim').value = ''
    document.getElementById('int').value = ''
    document.getElementById('res').innerHTML = 'Insira os valores'
}