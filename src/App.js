import './App.css';
import { Routes, Route } from 'react-router-dom';
import WeatherCards from './component/Weather/WeatherCards';
import WeatherCreation from './routes/Weather/WeatherCreation'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WeatherCards/>}/>
        <Route path='/formulario' element={<WeatherCreation/>}/>
      </Routes>
    </div>
  );
}

export default App;
