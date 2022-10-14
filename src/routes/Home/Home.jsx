import './Home.css';
import WeatherCards from '../../component/Weather/WeatherCards';

const Home = () => {
  
    return (
      <>
        <div className='main-container'>         
          <WeatherCards/>
        </div>
      </>
    );
  };
  
  export default Home;