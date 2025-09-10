function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  
  

  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora <= 12) {
    //Bom dia!
    img.src = 'fotomanha.jpg'
    document.body.style.background = '#ede8ddff' // Para mudar a cor de fundo com JavaScript
  } else if ( hora >= 12 && hora <= 18) {
    //Boa tarde!
    img.src = 'fototarde.jpg'
    document.body.style.background = '#f39b79ff'

  } else {
    //Boa noite!
    img.src = 'fotonoite.jpg'
    document.body.style.background = '#0a0a17ff'
  }
}
