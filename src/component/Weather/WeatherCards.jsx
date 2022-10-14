import { useContext, useEffect } from "react";
import { WeatherCardsContext } from "../../context/WeatherCardsContext";
import WeatherCard from "./WeatherCard";
import "./WeatherCards.css";

const WeatherCards = () => {
  const { datos, setDatos } = useContext(WeatherCardsContext);
  
  useEffect(() => {
    const weatherStored = JSON.parse(localStorage.getItem('datos'))

    if (weatherStored) {
      setDatos(weatherStored)
    } 
  }, [])


  return (
      <div className="weather-container">
        {datos.length === 0 ? (
          <span> No hay tarjetas para mostrar</span>
        ) : (
          datos.map((dato) => <WeatherCard key={dato.id} dato={dato} />)
        )}
      </div>
  );

};

export default WeatherCards;