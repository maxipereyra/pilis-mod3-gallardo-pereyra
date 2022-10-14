import { useContext } from 'react';
import { getWeather } from '../../services/service';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { WeatherCardsContext } from '../../context/WeatherCardsContext'

const WeatherCreation = () => {

    const { datos, setDatos } = useContext(WeatherCardsContext);
    const { register, handleSubmit, formState: { errors} } = useForm();
    const navigate = useNavigate();

    console.log(localStorage.getItem('datos'))

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
            })
            
        navigate('/')
    }
    
    return(
        <div className='sign-in-container'>
            <form className='sign-in-form' onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='input-form'
                    type="text" 
                    placeholder='Ingrese nombre de ciudad'
                    {...register('ciudad', {
                        required: 'Debe ingresar el nombre de ciudad'
                    })}
                />
                <p> { errors.ciudad } </p>
                <input
                    className='input-form'
                    type="" 
                    placeholder='Ingrese longitud'
                    { ...register('longitud', {
                        required : 'Debe ingresar la longitud'
                    })} 
                    name="longitud"
                />
                <p> { errors.longitud } </p>
                <input 
                    className='input-form'
                    placeholder='Ingrese latitud' 
                    name="latitud"
                    { ...register('latitud', {
                        required: 'Debe ingresar la latitud'
                    })}
                />
                <p> { errors.latitud} </p>
                <input 
                    className='input-form'
                    placeholder='ingrese URL de imagen'
                    name='url'
                    { ...register('url', {
                        required: 'Debe ingresar una url de una imagen'
                    })}
                />

                <p> { errors.url } </p>
                    <button className='btn-form' type='submit'>Enviar</button>

            </form>
        </div>
    )
}

export default WeatherCreation;