import { useContext } from "react";
import { WeatherCardsContext } from "../../context/WeatherCardsContext";
import WeatherCard from "./WeatherCard";
import "./WeatherCards.css";

const WeatherCards = () => {
  const { datos } = useContext(WeatherCardsContext);

  return (
      <div className="weather-container">
        {datos.length === 0 ? (
          <span> No hay tarjetas para mostrar</span>
        ) : (
          datos.map((dato) => <WeatherCard key={datos.id} dato={dato} />)
        )}
      </div>
  );

};

export default WeatherCards;