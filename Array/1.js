var numbers = [];
var maiorNum = 0;
var menorNum = 100;
var total = 0;
var cont = 0;
var media = 0;

function add() {
    var num = document.getElementById('num').valueAsNumber;
    if (numbers.indexOf(num) == -1 && num >= 1 && num <= 100) {
        numbers.push(num);
        document.getElementById('res').innerHTML += `O número ${num} foi adicionado!     `;
        if (num > maiorNum) {
            maiorNum = num;
        }
        if (num < menorNum) {
            menorNum = num;
        }
        total += num;
        cont++;
        media = total / cont;
        document.getElementById('num').value = '';
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
}

function fin() {
    document.getElementById('final').innerHTML = '';
    document.getElementById('final').innerHTML += `Ao todo temos ${numbers.length} cadastrados.<br><br>`;
    document.getElementById('final').innerHTML += `O maior valor informado é ${maiorNum}.<br><br>`;
    document.getElementById('final').innerHTML += `O menor valor informado é ${menorNum}.<br><br>`;
    document.getElementById('final').innerHTML += `Somando todos os valores temos ${total}.<br><br>`;
    document.getElementById('final').innerHTML += `A média dos valores é ${media}.<br><br>`;
}