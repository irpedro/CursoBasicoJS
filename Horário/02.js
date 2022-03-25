function tema() {
	/* Tempo */
	var dia = new Date()
	var horas = dia.getHours()
	var tempo = document.getElementById('tempo')
	tempo.innerHTML = `Agora são ${horas} horas`
	/* Outros */
	var imagem = document.getElementById('imagem')
	var fundo = document.getElementById('fundo')
	if(horas > 0 && horas < 12){
		imagem.src = 'manha.jpg'
  document.body.style.background = '#e2cd9f'
	} else if(horas >= 12 && horas <= 18){
		imagem.src = 'tarde.jpg'
   document.body.style.background = '#b9846f'
	} else{
		imagem.src = 'noite.jpg'
   document.body.style.background = '#515154'
	}
}
