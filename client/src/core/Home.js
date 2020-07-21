import React from 'react';
import Posts from '../post/Posts';
import MTBlogo from '../images/MTBlogo.png'
import './home-style.css';


  
   
 



const Home = () => (
  
    <div className="background" >
      <div className='jumbotron text-center background'>

        <p className='lead'>Welcome to Mountain Bike Mania</p>
        <img src={MTBlogo} />

        <Posts />
      </div>
    </div>

  
);

export default Home;
