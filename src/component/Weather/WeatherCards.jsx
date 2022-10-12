import { useContext } from "react";
import { Link } from "react-router-dom";
import { FormContext } from "../../context/FormContext";
import WeatherCard from "./WeatherCard";
import "./WeatherCards.css";

const WeatherCards = () => {
  const { datos } = useContext(FormContext);

  return (
    <>
      <h1>App para ver clima de otros lugares</h1>

      <div className="weather-container">
        {datos.length === 0 ? (
          <span> No hay tarjetas para mostrar</span>
        ) : (
          datos.map((dato) => <WeatherCard key={datos.id} dato={dato} />)
        )}
      </div>

      {<Link to="/formulario">Nueva tarjeta</Link>}

    </>
  );

};

export default WeatherCards;