import React, { Component } from 'react';
import CoxsBazar from './img/CoxsBazar.png';
import Sreemongol from './img/Sreemongol.png';
import Sundorbon from './img/sundorbon.png';
import './Slider.css';
import { Link, useParams } from 'react-router-dom'



class Slider extends Component {
    state = {
      info: {
        backgroundImg : CoxsBazar,
        active: 1,
        infoTitle: "Cox's Bazar",
        Description: " Cox's Bazar is a beautiful place for tourism. It has the longest sea beach in world which is 120 km long"
      }
    }
    handleClick = (e) =>{
      const name = e.target.name;
      if(name === 'cox'){
        let tempState = {
          backgroundImg : CoxsBazar,
          active: 1,
          infoTitle: "Cox's Bazar",
          Description: " Cox's Bazar is a beautiful place for tourism. It has the longest sea beach in world which is 120 km long"
        }
        this.setState({
          info: tempState
        })
      }
      else if(name === 'sundor'){
        let tempState = {
          backgroundImg : Sundorbon,
          active: 2,
          infoTitle: "SundorBon",
          Description: " SundorBon is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal."
        }
        this.setState({
          info: tempState
        })
      }
      else if(name === 'sree'){
        let tempState = {
          backgroundImg : Sreemongol,
          active: 3,
          infoTitle: "Sreemongol",
          Description: " Sreemongol is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming."
        }
        this.setState({
          info: tempState
        })
      }
    }
    render(){
      let active = this.state.info.active;
      let class1, class2, class3;
      if(active === 1){
        class1 = "withBorder"; class2 = "withOutBorder"; class3 = "withOutBorder";
      }
      else if(active === 2){
        class1 = "withOutBorder"; class2 = "withBorder"; class3 = "withOutBorder";
      }
      else if(active === 3){
        class1 = "withOutBorder"; class2 = "withOutBorder"; class3 = "withBorder";
      }
      return(
        <div>
      <h1 style={{color:'white'}}>Welcome to Our Travel Guru</h1>
          <div className = "text-success">
            {this.state.info.infoTitle}
            {this.state.info.Description}
          </div>

          <div>
            <img className={class1} style={{width:'270px', height: '416px'}} src={CoxsBazar} alt="" name="cox" height="200" width="200" onClick={this.handleClick}/>
            <img className={class2} style={{width:'270px', height: '416px'}} src={Sundorbon} alt="" name="sundor" height="200" width="200" onClick={this.handleClick}/>
            <img className={class3} style={{width:'270px', height: '416px'}} src={Sreemongol} alt="" name="sree" height="200" width="200" onClick={this.handleClick}/>
          </div>
          
          <div>
         <br/>   <Link style={{border: '1px solid gold', padding: '5px', backgroundColor: 'gold', borderRadius: '4px'}} to={
              {
                pathname: '/book',
                state: this.state.info
              }
            }>Booking</Link>
          </div>
        </div>
      )
    }
}

export default Slider;