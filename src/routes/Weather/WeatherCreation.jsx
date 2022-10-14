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
        getWeather(data.latitud, data.longitud)
            .then( (data) => {
                const aux = JSON.parse(localStorage.getItem("datos"));//Asigno a la varable aux los datos del localStorage
                const weathers = [];
                const weather = { 
                    id: datos.length+1,
                    ciudad: ciudad,
                    latitude: data.latitude,
                    longitude: data.longitude,
                    temperature: data.current_weather.temperature,
                    windspeed: data.current_weather.windspeed,
                    url: url
                }
                setDatos([...datos, weather]);

                if(aux === null) { //Si el valor de la variable aux es null guarda los datos del clima en un array y los mando al localStorage
                    weathers.push(weather);
                    console.log(weathers);
                    localStorage.setItem("datos", JSON.stringify(weathers));
                } else { //Si la variable datos existe en el localStorage le agregaos los nuevos datos del clima
                    aux.push(weather);
                    console.log(aux);
                    localStorage.setItem("datos", JSON.stringify(aux));
                }    

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
                <p> { errors.ciudad?.message } </p>
                <input
                    className='input-form'
                    type="number" 
                    placeholder='Ingrese latitud'
                    name="latitud"
                    step='0.1'
                    { ...register('latitud', {
                        required : 'Debe ingresar la latitud'
                    })} 
                />
                <p> { errors.latitud?.message } </p>
                <input 
                    type='number'
                    className='input-form'
                    placeholder='Ingrese longitud' 
                    name="longitud"
                    step='0.1'
                    { ...register('longitud', {
                        required: 'Debe ingresar la longitud'
                    })}
                />
                <p> { errors.longitud?.message } </p>
                <input 
                    type='text'
                    className='input-form'
                    placeholder='ingrese URL de imagen'
                    name='url'
                    { ...register('url')}
                />
                    <button className='btn-form' type='submit'>Enviar</button>

            </form>
        </div>
    )
}

export default WeatherCreation;