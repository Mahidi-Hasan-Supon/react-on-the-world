import React, { use, useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countris = ({fetchCountries}) => {
   const [visiteCountry,setVisiteCountry] = useState([])
   console.log(visiteCountry)
//    visite Coount handle
    const handelCount = (country)=>{
        console.log('clicked',country)
        const manageCountry = [...visiteCountry,country]
        setVisiteCountry(manageCountry);
    }
    // flags
    const [visiteFlags,setVisiteFlags] =useState([])
    const handleFlags = (flags)=>{
        const manageFlags = [...visiteFlags,flags]
        setVisiteFlags(manageFlags)
    }


    const countrisData = use(fetchCountries)
    const countries = countrisData.countries
    console.log(countries)
    return (
        <div>
            <h1>Hello all countries: {countries.length}</h1>
            <h3>Visited Country Count: {visiteCountry.length}</h3>
            <h3>Flags Click: {visiteFlags.length}</h3>
            <ol>
               {
                visiteCountry.map(country=><li>{country.name.common}</li>)
               }
            </ol>
            <div>
                {
                   visiteFlags.map(flag=><img src={flag}></img>) 
                }
            </div>
           <div className='countries-container'>
             {
                countries.map(countrie=><Country 
                handleFlags ={handleFlags} 

                handelCount={handelCount}
                key={countrie.cca3.cca3} 
                country={countrie}></Country>)
            }
           </div>
        </div>
    );
};

export default Countris;
