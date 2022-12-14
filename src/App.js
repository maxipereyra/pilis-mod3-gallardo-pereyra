import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import Login from './routes/Login/Login';
import WeatherCreation from './routes/Weather/WeatherCreation'
import Page404  from './routes/404/404Page';

function App() {
  return (
    <div className="App">
      {/* definimos distintos puntos de navegacion para la app */}
      <Routes>
        <Route path='/' element={<Navigation/>}>
           <Route index element={<Home/>}/>
           <Route path='login' element={<Login/>}/>
           <Route path='/formulario' element={<WeatherCreation/>}/>
           <Route path='*' element={<Page404/>} />
        </Route>
        

      </Routes>
    </div>
  );
}

export default App;
