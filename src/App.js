import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import WeatherCreation from './routes/Weather/WeatherCreation'


function App() {
  return (
    <div className="App">
      {/* definimos distintos puntos de navegacion para la app */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/formulario' element={<WeatherCreation/>}/>
      </Routes>
    </div>
  );
}

export default App;
