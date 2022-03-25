var hoje = new Date()
var dia = hoje.getDay()

switch (dia) {
	case 0:
		alert('Hoje é domingo')
		break
	case 1:
		alert('Hoje é segunda')
		break
	case 2:
		alert('Hoje é terça')
		break
	case 3:
		alert('Hoje é quarta')
		break
	case 4:
		alert('Hoje é quinta')
		break
	case 5:
		alert('Hoje é sexta')
		break
	case 6:
		alert('Hoje é sábado')
		break
	default:
		alert('[ERRO] Dia inválido!')
		break
}
