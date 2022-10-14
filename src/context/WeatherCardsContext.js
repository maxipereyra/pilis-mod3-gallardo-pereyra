import { createContext, useState  } from "react";

export const WeatherCardsContext = createContext({
    datos: [{
        id:'',
        ciudad: '',
        latitud: '',
        longitude: '',
        temperature: '',
        windspeed: '',
        url: ''
    }],
    setDatos: () => {}
})

export const WeatherCardsContextProvider = ({ children }) => {
    const [ datos, setDatos ] = useState([]);
    const value = { datos, setDatos };

    return <WeatherCardsContext.Provider value={value}>{children}</WeatherCardsContext.Provider>;
}