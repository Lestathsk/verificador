
function calcular() {
  var anotx = document.getElementById('ano')
  var ano = (anotx.value)
  var idade = (2022 - ano)
  var sexo = document.querySelector ("input[name='sexo']:checked").value
  var res = document.getElementById('res')
  var img = document.getElementById('imagem')
  res.innerHTML = ` Olá! Você tem <strong> ${idade} </strong> anos e é do sexo <strong> ${sexo} </strong>  `
  if (idade < 12 && sexo == ('masculino') ) {
    document.getElementById("imagem").innerHTML = "<img src='menino.png'>";
    document.body.style.background ='#25434B'
  } else if (idade < 12 && sexo ==('feminino') ) {
    document.getElementById("imagem").innerHTML = "<img src='menina.png'>";
    document.body.style.background ='#69820E'
  } else if (idade < 26 && sexo == ('masculino')) {
    document.getElementById("imagem").innerHTML = "<img src='rapaz.png'>";
    document.body.style.background ='#484848'
  } else if (idade < 26 && sexo ==('feminino') ) {
    document.getElementById("imagem").innerHTML = "<img src='moça.png'>";
    document.body.style.background = '#B99293'
  } else if (idade < 55 && sexo == ('masculino')) {
    document.getElementById("imagem").innerHTML = "<img src='homem.png'>";
    document.body.style.background = '#5386B9'
  } else if (idade < 55 && sexo == ('feminino')) {
    document.getElementById("imagem").innerHTML = "<img src='mulher.png'>";
    document.body.style.background = '#B0957F'
  } else if (idade > 55 && sexo == ('masculino')) {
    document.getElementById("imagem").innerHTML = "<img src='velho.png'>";
    document.body.style.background = '#B4C3C8'
  } else {
    document.getElementById("imagem").innerHTML = "<img src='velha.png'>";
  }
}