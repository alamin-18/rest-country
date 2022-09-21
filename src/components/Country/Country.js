import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country)
    const {name,flags,capital,independent,region,population} =props.country;
    return (
        <div className='card'>
          <h1>Name:{name.common} </h1>
          <img src={flags.png} alt="" />
          <h2>Capital: {capital}</h2>
          <h2>Continent: {region}</h2>
          <h2>Population: {population}</h2>
          <h2>Independent: {independent === true ? "Yes":"No" }</h2>  
        </div>
    );
};

export default Country;