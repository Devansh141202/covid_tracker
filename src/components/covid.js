import React, { useEffect, useState} from 'react'
import "./covid.css";

const Covid = () => {

    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const acData = await res.json();
            console.log(acData.statewise[0]);
            setData(acData.statewise[0]);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
        <section>
            <h1>🚨 LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>

            <ul>
                <li className='card'>
                    <p className='card__name'><span> Our </span> Country </p>
                    <p className='card__total card__small'>INDIA</p>
                </li>
                <li className='card1'>
                    <p className='card__name'><span> Total </span> Recovered </p>
                    <p className='card__total card__small'>{data.recovered}</p>
                </li>
                <li className='card2'>
                    <p className='card__name'><span> Total </span> Confirmed </p>
                    <p className='card__total card__small'>{data.confirmed}</p>
                </li>
                <li className='card3'>
                    <p className='card__name'><span> Total </span> Death </p>
                    <p className='card__total card__small'>{data.deaths}</p>
                </li>
                <li className='card4'>
                    <p className='card__name'><span> Total </span> Active </p>
                    <p className='card__total card__small'>{data.active}</p>
                </li>
                <li className='card5'>
                    <p className='card__name'><span> Last </span> Update </p>
                    <p className='card__total card__small'>{data.lastupdatedtime}</p>
                </li>
            </ul>
        </section>
        </>
    )
}

export default Covid