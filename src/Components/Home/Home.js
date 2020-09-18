import React from 'react';
import './Home.css';
import CoxsBazar from '../../Image/CoxsBazar.png';
import Sreemongol from '../../Image/Sreemongol.png';
import Sundorbon from '../../Image/sundorbon.png';
import TravelSpace from '../TravalSpace/TravelSpace';
import Header from '../Header/Header';

const Home = () => {
 
// const places = [
//     {
//         title: "Cox's Bazar",
//         description: '...',
        
        
//     },
//     {
//         title: 'Sreemongol',
//         description: '....',
//         imgUrl: {Sreemongol}
//     },
//     {
//         title: 'Sundorbon',
//         description: ' ...',
//         imgUrl: {Sundorbon}
//     }
// ]
return (
    <div>
        <Header></Header>
        <img className="background" src={CoxsBazar} alt="" />
        <TravelSpace></TravelSpace>
     
        {/* {
            places.map(place => <TravelSpace place={place}></TravelSpace>)
        } */}
    </div>
  

    );
};

export default Home;