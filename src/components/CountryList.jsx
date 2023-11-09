import React, { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
import CountryCard from './CountryCard';
import Loading from './Loading';
import ReactPaginate from 'react-paginate';
import CountryInfo from './CountryInfo';

const CountryList = () => {

    const recordPerPage = 16;

    const [loading, setLoading] = useState(null);
    const [countries, setCountry] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const countryName = useRef("");

    let baseURL = 'https://restcountries.com/v3.1/all';

    async function listAllCountry() {
        if(countryName.current.value === ""){
            setLoading(true)
            const res = await fetch(baseURL);
            const data = await res.json();
            setCountry(data);
            setLoading(null)
        }
        
    }

    async function FindCountry(){
        const inputCountryName = countryName.current.value;

        if(inputCountryName !== ""){
            setLoading(true);
            let searchURL = `https://restcountries.com/v3.1/name/${inputCountryName}`;

            const res = await fetch(searchURL);
            const data = await res.json();
            setCountry(data);
            setLoading(null);
            setCurrentPage(0);
            // console.log("========================" + searchURL)
        }else{
            listAllCountry();
        }
    }

    useEffect(() => {
        listAllCountry();
    }, []);

    const offset = currentPage * recordPerPage;
    const pageCount = Math.ceil(countries.length / recordPerPage);
    const currentCountries = countries.slice(offset, offset + recordPerPage);

    const [selectedCountry, setSelectedCountry] = useState('');
    function handleCountryClick(country){
        setSelectedCountry(country);
    }

    return (
        <>
            {/* Search Bar */}
            <div>
                <div className='flex justify-center items-center h-11 my-5'>
                    <input 
                        type="text" 
                        placeholder='Search Your Flag Here...'
                        className='h-full md:w-1/3 font-semibold px-2 text-purple-500 outline focus:outline-purple-500 outline-2'
                        ref={countryName}
                    />
                    <button onClick={FindCountry} type='submit' className='bg-purple-500 text-white h-full px-5 outline outline-purple-500 outline-2'>
                        Search
                    </button>
                </div>
            </div>
            {/* List All Country */}
            <ReactPaginate 
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={''}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={pageCount}
                onPageChange={({selected}) => setCurrentPage(selected)}
                // containerClassName={'pagination'}
                // activeClassName={'active'}
                containerClassName="flex justify-center space-x-2"
                activeClassName="bg-purple-500 text-white"
                pageClassName="px-3 py-2 border rounded-md"
                previousClassName="px-3 py-2 border rounded-md"
                nextClassName="px-3 py-2 border rounded-md"
                breakClassName="px-3 py-2 border rounded-md"
                disabledClassName="opacity-50 cursor-not-allowed"
            />
            <div className='justify-center'>
                {
                    loading ? (
                        <Loading />
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0'>
                            {currentCountries.map((country, i) => {
                                return (
                                    <div key={i} onClick={() => handleCountryClick(country)}>
                                        <CountryCard
                                            // key={i}
                                            flags={country?.flags?.png}
                                            alt={country?.flags?.alt}
                                            name={country?.name}
                                            officialName={country?.name?.official}
                                            capitalName={country?.capital}
                                            alternativeName={country?.altSpellings}
                                            code2={country?.cca2}
                                            code3={country?.cca3}
                                            dialingCodes={`${country?.idd?.root}${country?.idd?.suffixes}`}
                                        />
                                    </div>
                                    
                                )
                            })}
                            {selectedCountry && <CountryInfo selectedCountry={selectedCountry} />}
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default CountryList