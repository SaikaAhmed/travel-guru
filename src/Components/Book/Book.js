import React from 'react';
import './Book.css';
import Booking from './Booking'
import { useLocation } from "react-router-dom";

export default function Book(){
    
let location = useLocation();
let description = location.state.Description;
return (
    <div>
    
        <Booking description = {description}></Booking>

    </div>
    );
}
