
import React from 'react';

const CountryCard = (props) => {

    return (
        <>
            {/* {console.log(props)} */}
            {/* <div className="flex flex-wrap">
                <div className="flex flex-col mx-2 my-2">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg h-full w-72">
                        <div className='px-2 py-2 h-40'>
                            <img src={props?.flags} alt={props?.alt} className='border-2 rounded-lg object-cover h-full w-full'/>
                        </div>
                        <div className="px-4 py-2">
                            <div className="font-bold text-xl mb-2">
                                {props?.name?.common}
                            </div>
                            <div>
                                <p className="text-gray-700 text-base">
                                    Native Name: <span className='font-semibold italic'>{props?.officialName}</span>
                                </p>
                                <p className="text-gray-700 text-base">
                                    Capital: <span className='font-semibold italic'>{props?.capitalName}</span>
                                </p>
                            </div>
                            <div>
                                <div className='my-5'>
                                    Alternative Name:
                                    <ul className='list-disc pl-5'>
                                        {
                                            props.alternativeName.map((altName, i) => {
                                                return(
                                                    <li key={i}>{altName}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    
                                </div>
                            </div>
                            <div>
                                <p>
                                    Code 2: <span className='font-semibold'>{props?.code2}</span>
                                </p>
                                <p>
                                    Code 3: <span className='font-semibold'>{props?.code3}</span>
                                </p>
                                <p>
                                    International Dialing Codes: <span className='font-semibold'>{props?.dialingCodes}</span>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div> */}
            <div className="flex flex-wrap">
                <div className="flex flex-col mx-2 my-2 w-72 h-full">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg w-auto">
                        <div className='px-2 py-2 h-40'>
                            <img src={props?.flags} alt={props?.alt} className='border-2 rounded-lg object-cover h-full w-full'/>
                        </div>
                        <div className="px-4 py-2 min-h-[0] h-96">
                            <div className="font-bold text-xl mb-2">
                                {props?.name?.common}
                            </div>
                            <div>
                                <p className="text-gray-700 text-base">
                                    Native Name: <span className='font-semibold italic'>{props?.officialName}</span>
                                </p>
                                <p className="text-gray-700 text-base">
                                    Capital: <span className='font-semibold italic'>{props?.capitalName}</span>
                                </p>
                            </div>
                            <div className='my-5'>
                                Alternative Name:
                                <ul className='list-disc pl-5'>
                                    {props.alternativeName.map((altName, i) => {
                                        return(
                                            <li key={i}>{altName}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="mt-auto">
                                <p>
                                    Code 2: <span className='font-semibold'>{props?.code2}</span>
                                </p>
                                <p>
                                    Code 3: <span className='font-semibold'>{props?.code3}</span>
                                </p>
                                <p>
                                    International Dialing Codes: <span className='font-semibold'>{props?.dialingCodes}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default CountryCard