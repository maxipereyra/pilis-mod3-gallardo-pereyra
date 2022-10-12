import { createContext, useState  } from "react";

export const FormContext = createContext({
    datos: [{
        id:'',
        ciudad: '',
        longitude: '',
        latitude: '',
        temperature: '',
        windspeed: '',
        url: ''
    }],
    setDatos: () => {}
})

export const FormProvider = ({ children }) => {
    const [ datos, setDatos ] = useState([]);
    const value = { datos, setDatos };

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}