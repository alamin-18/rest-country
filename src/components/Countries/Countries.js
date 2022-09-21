import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = () => {
    const [countries,setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div >
            <h1>Countries Number: {countries.length}</h1>
            <div className='container'>
            {countries.map(country => <Country country={country}></Country>)}
            </div>
            
        </div>
    );
};

export default Countries;