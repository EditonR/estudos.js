function verificar () {
  var data = new Date()
  var ano = data.getFullYear() //Ele vai pegar o ano inteiro
  var fano = document.getElementById('txtano');
  var res = document.querySelector('div#res');
  
  //Abaixo estou fazendo uma micro validação se a caixa está vazia ou se o valor é maior que o ano atual.
  if(fano.value.length == 0 || fano.value > ano){
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - fano.value
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
      genero = 'Homem'
      if (idade >= 0 && idade < 10){
        //Criança
        img.setAttribute('src', 'foto-bebe-h.jpg');
      } else if (idade < 21){
        //Jovem
        img.setAttribute('src', 'foto-jovem-h.jpg');
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'foto-adulto-h.jpg');
      } else {
        //Idoso
        img.setAttribute('src', 'foto-idoso-h.jpg');
      }



    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10){
        //Criança
        img.setAttribute('src', 'foto-bebe-m.jpg');
      } else if (idade <21){
        //Jovem
        img.setAttribute('src', 'foto-jovem-m.jpg');
      } else if (idade <50) {
        //Adulto
        img.setAttribute('src', 'foto-adulto-m.jpg');
      } else {
        //Idoso
        img.setAttribute('src', 'foto-idoso-m.jpg');
      }
    }
    
    res.style.textAlign = 'Center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img);

  }
}