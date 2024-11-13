
async function fetchWeather(params) {

  const apiKey ="206b10c963e395dbd699f5be57fd4d6d";
  const city ="Santiago";
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  try{
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error en la respuesta API');
    const data = await response.json();
    document.getElementById('clima').innerText = `Temperatura en ${city}: ${data.main.temp}°C`;
  } catch (error){
    console.error('Error al obtener datos', error);
    document.getElementById('clima').innerText = 'Error al obtener datos del clima';
  }
}
fetchWeather();