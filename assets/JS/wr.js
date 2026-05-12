// Variaveis Inciais
const cidade = document.getElementById('Cidade')
const button = document.getElementById('Botaobs')
const result = document.getElementById('Resultado')

//Botão e integração com API
 button.addEventListener('click', function (){
 if(cidade.value === ''){
     return
 }
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade.value+ '&appid=7fd9c0c4a43abe57fa0437f4ae44714f&units=metric&lang=pt')
    .then(function (response) {
     return response.json()
    })
    //Data da api
    .then(function (data) {
        if (data.cod ==='404'){
            result.style.backgroundColor = '#2a4375'

            result.innerHTML = '<p>Cidade Não encontrada!</p>'
            return
        }
        result.style.backgroundColor = '#2a4375'
     result.innerHTML = `
      <h1>${data.name}</h1> 
      <p><strong>Temperatura:</strong> ${data.main.temp}°C</p>
      <p><strong>Clima:</strong> ${data.weather[0].description}</p>
      <p><strong>Umidade:</strong> ${data.main.humidity}%</p >`
    })
 })