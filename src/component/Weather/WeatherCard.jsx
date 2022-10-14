import { useContext } from 'react';
import { BsFillXOctagonFill } from "react-icons/bs";
import { WeatherCardsContext } from '../../context/WeatherCardsContext';
import './WeatherCard.css'

const WeatherCard = ({ dato }) => {
  const { ciudad, longitude, latitude, temperature, windspeed, url } = dato;
  const { datos, setDatos } = useContext(WeatherCardsContext);

  const handleDelete = () => {
    setDatos(
      datos.filter((del) => del.id !== dato.id)
    )
 }

  return (
    
      <div className="weather">
        <div className="delete" onClick={handleDelete}>
          <BsFillXOctagonFill />
        </div>
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
