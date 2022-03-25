function idade(){
	function mulher(){
	if(dif > 0 && dif < 12){
		img.setAttribute('src', 'crianca_m.png')
	}else if(dif >= 12 && dif < 24){
		img.setAttribute('src', 'moca.png')
	}else if(dif >= 24 && dif < 50){
		img.setAttribute('src', 'adulto_m.png')
	}else{
		img.setAttribute('src', 'idosa.png')	
	}
	}
	function homem(){
	if(dif > 0 && dif < 12){
		img.setAttribute('src', 'crianca_h.png')
	}else if(dif >= 12 && dif < 24){
		img.setAttribute('src', 'moco.png')	
	}else if(dif >= 24 && dif < 50){
		img.setAttribute('src', 'adulto_h.png')	
	}else{
		img.setAttribute('src', 'idoso.png')
	}
	}
	/* -------- */
	var ano = new Date().getFullYear()
	var nasc = document.getElementById('nasc').value
	var dif = ano - nasc
	var res = document.getElementById('res')

if (dif <= 0 || dif > 110) {
		text.innerHTML = 'Data inválida'
}else{
	var img = document.createElement('img')
	img.setAttribute('id', 'foto')
	var sexo = document.getElementsByName('sexo')
	if(sexo[0].checked){
		var genero = 'homem'
		homem()
	}else{
		var genero = 'mulher'
		mulher()
	}
	res.style.textAlign = 'center'
	res.innerHTML = `Você é um ${genero} com ${dif} anos`
	res.appendChild(img)
}
}