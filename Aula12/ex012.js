var agora = new Date() // Para pegar a hora do seu computador.
var hora = agora.getHours()
console.log(`Agora é extamente ${hora} horas.`)
if (hora < 12) {
  console.log('Bom dia!')
} else if (hora <=18) {
  console.log ('Boa tarde!')
} else {
  console.log ('Boa noite!')
}