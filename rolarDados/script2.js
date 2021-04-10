function rolarDados()
{
  var aleatorio = parseInt(Math.random() * 20 + 1)

  var dadosAleatorios = window.document.getElementById('dadosAle')

  var dadosAle = Number(dadosAleatorios.value)

  var h2 = document.getElementById('result')

  if(dadosAle == 1)
  {
    h2.textContent = aleatorio;
  }

  else 
  {
    h2.textContent = aleatorio * dadosAle;
  }

}