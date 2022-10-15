import './404Page.css';
import clima404 from '../../assets/page-404.png';

const Page404 = () => {  
    return (
      <>
        <div className='main-container-404'> 
          <img src={clima404} alt='imagen404' className='page404' />
        </div>
      </>
    );
  };
  
  export default Page404;