import React, { useEffect, useState } from "react";
import spinner from './spinner.gif';
const Astrology = ()=>{
    const [data, setData] = useState();
    const [rashi , setRashi] = useState();
    

    useEffect(()=>{
        const fetchData = async () =>{

            const url = `https://daily-rashifal-api.p.rapidapi.com/${rashi}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '1a608fb8a5mshc9fd9db09c50c15p13f43cjsn35c03cebde76',
                    'X-RapidAPI-Host': 'daily-rashifal-api.p.rapidapi.com'
                }
            };
    
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result);
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    },[rashi])
    const selecedData = (event)=>{
        const selected = event.target.value;
        setRashi(selected);
        
    }
    const date = new Date().toLocaleDateString();
    return(<>
    <div className="container" style={{justifyContent:'center',alignItems:'center'}}>
    <select onChange={selecedData} className="form-select" >
    <option value={'aries'}>Aries</option>
    <option value={'cancer'}>Cancer</option>
    <option value={'virgo'}>Virgo</option>
    <option value={'aquarius'}>Aquarius</option>

    <option value={'capricorn'}>Capricorn</option>
    <option value={'libra'}>Libra </option>
    <option value={'taurus'}>Taurus </option>
    <option value={'sagittarius'}>Sagittarius</option>

    <option value={'leo'}>Leo</option>
    <option value={'pisces'}>Pisces  </option>
    <option value={'gemini'}>Gemini </option>
    <option value={'taurus'}>Taurus</option>

    </select>
     

   
    {data && data.rashifal ? (<>

            <br/>
            <div  className="card" style={{margine : '20px 20px 20px 20px'}} >
            <img src={'https://source.unsplash.com/featured/?astrology'} className="card-img-top" alt="Image"/>
            <div className="card-body">

            <h6>Rashi : {rashi}</h6>
            <p className="card-text">Date : {date}</p>
            <p className="card-text">Rashifal : {data.rashifal}</p>
            <br/>
            </div>
            </div>


         </>
      ) : (
        <>
        <br/>
        <img src={spinner} alt="loading..." style={{  top : '50%', left : '50%',right: '50%' , position : 'absolute' , marginTop : '10px' ,width : '50px' , height:'50px'}}/>
      </>)}
      </div></>);
}

export default Astrology;