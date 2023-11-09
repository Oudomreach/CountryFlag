import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { useLocation } from 'react-router-dom';

const CountryInfo = ({selectedCountry}) => {

    // const [loading, setLoading] = useState(null);
    const [country, setCountry] = useState([]);

    // let baseURL = `https://restcountries.com/v3.1/name/${seletedCountry}`;
    let baseURL = 'https://restcountries.com/v3.1/name/';

    async function GetCountryInfo(){
        const res = await fetch(baseURL+ selectedCountry.name.common);
        // console.log("========================="+res);
        // console.log("=========================================" + JSON.stringify(selectedCountry));
        // console.log("=========================================" + selectedCountry.name.common);
        const data = await res.json();
        // console.log("=====================" + data)
        console.log("============================" + JSON.stringify(data));
        setCountry(data);
        // console.log(country);
    }

    useEffect(() => {
        GetCountryInfo();
        // console.log(country);
    }, [])

    return (
        <>
            {
                country.map((countries, i) => {
                    return (
                        <div key={i}>
                            {countries.name.common}
                        </div>
                    )
                })
            }


        </>
    )
}

export default CountryInfo