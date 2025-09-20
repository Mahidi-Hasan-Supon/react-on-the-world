import React, { useState } from 'react';
import './Country.css'
const Country = ({country,handelCount,handleFlags,removeCountry}) => {
    const [visited,setvisited] = useState(false)
    // console.log(countrie.area.area)
    const handleBtn=()=>{
        
        // setvisited(visited?false:true)
        // setvisited(!visited)
        if(visited){
            setvisited (false) 
            removeCountry(country)
        }else{
            setvisited(true)
            handelCount(country)

        }
   
    }
    return (
        <div className={`country-container ${visited &&'country-visited'}`}>
            <img src= {country.flags.flags.png} alt=""/>
            <h3>Name: {country.name.common}</h3>
            <h4>NameOfficial: {country.name.official}</h4>

            <h5>Capital: {country.capital.capital}</h5>
            <p>Area: {country.area.area} {country.area.area>300000?'Big Country':'Small Country'}</p>
            <p>cca3: {country.cca3.cca3}</p>
            <p>Region: {country.region.region} {country.region.region ==='Europe'?'Big Country':'Small country'}</p>
            <button onClick={handleBtn}>{visited?'Visited':'Not visited'}</button>
            <button onClick={()=>{
                handleFlags(country.flags.flags.png)
            }}>click flags</button>
            <button>Delete</button>
        </div>
    );
};

export default Country;
