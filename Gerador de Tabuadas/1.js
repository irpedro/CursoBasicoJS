function tabu() {
    var n = document.getElementById('num').valueAsNumber
    if (n == "undefined") {
        window.alert('Por favor digite um número')
    } else {
        tab.innerHTML = ''
        for (var c = 0; c <= 10; c++) {
            let item = document.createElement('option') 
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `${c}`
            item.selected = 'selected'
            tab.appendChild(item)
        }
    }
}
function limp(){
    document.getElementById('num').value = ''
    tab.innerHTML = ''
}