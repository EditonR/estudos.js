// Exercícios de fixação p/ condição múltiplas

var mes = new Date()
var mes = mes.getMonth()
/*
 0 = Janeiro
 1 = Feveiro
 2 = Março
 3 = Abril
 4 = Maio
 5 = Junho
 6 = Julho
 7 = Agosto
 8 = Setembro
 9 = Outubro
 10 = Novembro
 11 = Dezembro

*/

console.log(mes)

switch(mes) {
  case 0://janeiro
    console.log(`Estamos no ${mes}, e é Verão!`)
    break
  case 1://fevereiro
    console.log(`Estamos no ${mes}, e é Verão!`)
    break
  case 2://março
    console.log(`Estamos no ${mes}, e é Verão!`)
    break
  case 3://abril
    console.log(`Estamos no ${mes}, e é Outuno!!`)
    break
  case 4://maio
    console.log(`Estamos no ${mes}, e é Outuno!!`)
    break
  case 5://junho
    console.log(`Estamos no ${mes}, e é Inverno!!`)
    break
  case 6://julho
    console.log(`Estamos no ${mes}, e é Inverno!`)
    break
  case 7://agosto
    console.log(`Estamos no ${mes}, e é Inverno!`)
    break
  case 8://setembro
    console.log(`Estamos no ${mes}, e é Primavera!`)
    break
  case 9://outubro
    console.log(`Estamos no ${mes}, e é Primavera!`)
    break
  case 10://novembro
    console.log(`Estamos no ${mes}, e é Primavera!`)
    break
  case 11://dezembro
    console.log(`Estamos no ${mes}, e é Verão!`)
    break
  default:
    console.log('[ERRO] Mês inválido')
    break  
}