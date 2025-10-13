function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var titulo = document.getElementById('titulo') // Irá pegar o h1
  var data = new Date()
  var hora = data.getHours()

  

  
  
  

  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora <= 12) {
    //Bom dia!
    img.src = 'fotomanha.jpg'
    document.body.style.background = '#ede8ddff' // Para mudar a cor de fundo com JavaScript
    titulo.innerText = 'Hora da Manhã!'
    
  } else if ( hora >= 12 && hora <= 17) {
    //Boa tarde!
    img.src = 'fototarde.jpg'
    document.body.style.background = '#f39b79ff'
    titulo.innerText = 'Hora da tarde!'

  } else {
    //Boa noite!
    img.src = 'fotonoite.jpg'
    document.body.style.background = '#0a0a17ff'
    titulo.innerText = 'Hora da Noite!'
  }
}
