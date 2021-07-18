import React, { useState,useEffect } from 'react'
const url = 'https://restcountries.eu/rest/v2/all'
const Countries = () => {
    const [Countries, setCountries] =useState([])

    const fetchCountriesData=async()=>{
        const response = await fetch(url)
        const Countries=await response.json()
        setCountries(Countries)
        console.log(Countries)
    }    
    useEffect(()=>{
      fetchCountriesData()
    },[])
    return (
        <>
        <section className="grid">
        {Countries.map((country)=>{
            const {numericCode,name,flag}=country
            return (<article key={numericCode}>
                <div>
                    <img src={flag} alt={name}/>
                </div>
            </article>
            )
        })} 
        </section>
        </>
    )
}

export default Countries;
