import React from 'react';
import Posts from '../post/Posts';
import MTBsymbol from '../images/MTBsymbol.png'
import './home-style.css';


  
   
 



const Home = () => (
  
    <div className="background" >
      <div className='jumbotron text-center background'>

        <p className='lead'>Welcome to Mountain Bike Mania</p>
        <img src={MTBsymbol} />

        <Posts />
      </div>
    </div>

  
);

export default Home;
