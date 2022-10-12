import { useContext } from 'react';
import { getWeather } from '../../services/service';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../../context/FormContext'

const WeatherCreation = () => {

    const { datos, setDatos } = useContext(FormContext);
    const { register, handleSubmit, formState: { errors} } = useForm();
    const navigate = useNavigate();

    const onSubmit = ( data ) => {
        const ciudad = data.ciudad;
        const url = data.url;
        getWeather(data.longitud, data.latitud)
            .then( (data) => {
                const weather = { 
                    id: datos.length+1,
                    ciudad: ciudad,
                    longitude: data.longitude,
                    latitude: data.latitude,
                    temperature: data.current_weather.temperature,
                    windspeed: data.current_weather.windspeed,
                    url: url
                }
                setDatos([...datos, weather]);
                console.log(weather);
            })
        navigate('/')
    }
    
    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="text" 
                    placeholder='Ingrese nombre de ciudad'
                    {...register('ciudad', {
                        required: 'Debe ingresar el nombre de ciudad'
                    })}
                />
                <p> { errors.ciudad } </p>
                <input 
                    type="" 
                    placeholder='Ingrese longitud'
                    { ...register('longitud', {
                        required : 'Debe ingresar la longitud'
                    })} 
                    name="longitud"
                />
                <p> { errors.longitud } </p>
                <input 
                    placeholder='Ingrese latitud' 
                    name="latitud"
                    { ...register('latitud', {
                        required: 'Debe ingresar la latitud'
                    })}
                />
                <p> { errors.latitud} </p>
                <input 
                    placeholder='ingrese URL de imagen'
                    name='url'
                    { ...register('url', {
                        required: 'Debe ingresar una url de una imagen'
                    })}
                />

                <p> { errors.url } </p>
                    <button type='submit'>Enviar</button>

            </form>
            
        </>
    )
}

export default WeatherCreation;