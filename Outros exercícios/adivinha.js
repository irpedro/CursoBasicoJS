var numSec = parseInt(Math.random() * 11)
while (chute != numSec) {
	var chute = parseInt(prompt('Digite um número de 0 até 10'))
	if (chute > 10 || chute < 0) {
		alert('Por favor digite um número entre 0 e 10')
	} else if (numSec < chute) {
		alert('Você errou, o número é menor')
	} else if (numSec > chute) {
		alert('Você errou, o número é maior')
	} else {
		alert('Você acertou!')
	}
}