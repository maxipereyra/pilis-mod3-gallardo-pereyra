import './WeatherCard.css'

const WeatherCard = ({ dato }) => {
  const { ciudad, longitude, latitude, temperature, windspeed, url } = dato;

  return (
    
      <div className="weather">
        <img src={url} />
        <h1> {ciudad} </h1>
        <h3>Longitud: {longitude} Latidtud: {latitude}
        </h3>
        <h1> Temperatura: {temperature} </h1>
        <h1> Vel. viento: {windspeed} </h1>
      </div>
    
  );
};

export default WeatherCard;
