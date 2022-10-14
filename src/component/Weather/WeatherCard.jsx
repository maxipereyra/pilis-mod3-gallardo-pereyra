import { useContext } from 'react';
import { BsFillXOctagonFill } from "react-icons/bs";
import { WeatherCardsContext } from '../../context/WeatherCardsContext';
import './WeatherCard.css'

const WeatherCard = ({ dato }) => {
  const { ciudad, longitude, latitude, temperature, windspeed, url } = dato;
  const { datos, setDatos } = useContext(WeatherCardsContext);

  const handleDelete = () => {
    const filter = datos.filter((del) => del.id !== dato.id);
    setDatos(filter)
    localStorage.setItem("datos", JSON.stringify(filter));
 }

  return (
    
      <div className="weather">
        <div className="delete" onClick={handleDelete}>
          <BsFillXOctagonFill />
        </div>
        <img src={url} alt="No hay imagen para mostrar" />
        <h1> {ciudad} </h1>
        <h3>Latidtud: {latitude} - Longitud: {longitude} 
        </h3>
        <h1> Temperatura: {temperature} </h1>
        <h1> Vel. viento: {windspeed}Km/h </h1>
      </div>
    
  );
};

export default WeatherCard;
