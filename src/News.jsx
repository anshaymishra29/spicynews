import React, { useEffect, useState } from 'react';
import spinner from './spinner.gif';
import horoscope from './horoscope.avif';
function News() {

    const [data, setData] = useState();
    const [category , setCategory] = useState('feed');
  
    const fetchData = async ()=>{
    
    // const url = 'https://news67.p.rapidapi.com/v2/topic-search?languages=en&search=sports';
    // const url = 'https://news67.p.rapidapi.com/v2/country-news?fromCountry=in&onlyInternational=true';
    const url = `https://news67.p.rapidapi.com/v2/${category}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1a608fb8a5mshc9fd9db09c50c15p13f43cjsn35c03cebde76',
        'X-RapidAPI-Host': 'news67.p.rapidapi.com'
      }
    };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
          setData(result);
      } catch (error) {
        console.error(error);
      }
  }
 
  useEffect(()=>{
    
    fetchData();
  },[category]);

  const takeInput = (event)=>{
    let newsCategory = event.target.value;
    setCategory(newsCategory);
  }

 return(<>
    <div className="container" style={{display:'flex mb', flexBasis:'33.33%', justifyContent:'center',alignItems:'center'}}>
    <button className='btn btn-secondary mb-5 ml-5 mr-5' style={{ marginLeft: '15px', marginTop:'10px' }} onClick={takeInput} value={'topic-search?languages=hi&search=politics'}>Hindi</button>
    <button className='btn btn-secondary mb-5 ml-5 mr-5 ' style={{ marginLeft: '15px', marginTop:'10px'}} onClick={takeInput} value={'topic-search?languages=en&search=sports'}>Sports</button>
    <button className='btn btn-secondary mb-5 ml-5 mr-5 ' style={{ marginLeft: '15px', marginTop:'10px' }} onClick={takeInput} value={'country-news?fromCountry=in&onlyInternational=true'}>India</button>
    <button className='btn btn-secondary mb-5 ml-5 mr-5' style={{ marginLeft: '15px',marginTop:'10px' }} onClick={takeInput} value={'country-news?fromCountry=gb&onlyInternational=true'}>World</button>
    <button className='btn btn-secondary mb-5 ml-5 mr-5' style={{ marginLeft: '15px',marginTop:'10px' }} onClick={takeInput} value={'crypto'}>Crypto</button>
    <button className='btn btn-secondary mb-5 ml-5 mr-5' style={{ marginLeft: '15px',marginTop:'10px' }} onClick={takeInput} value={'trending'}>Trending</button>
    </div>


    

    {/* <button className='btn btn-secondary mb-5' style={{ marginLeft: '15px' }} onClick={fetchData}>Fetch Data</button> */}
   
    {data != null ? data && data.news && data.news.map((article, index) =>{

        return(<div key={index} className="card"style={{display:'flex mb', flexBasis:'33.33%', justifyContent:'center',alignItems:'center'}}>
        <img src={article.Image} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Title : {article.Title} </h5>
        <p className="card-text">Description : {article.Description}..</p>
        <p className="card-text">Summary : {article.Summary}.. </p>
        <h5>Published : {article.PublishedOn}</h5>
        <a href={article.Url} className='btn btn-secondary'> Read full article.. </a>
        </div>
        </div>);
        
    }) : <div className='container'><img src={spinner} style={{height :'50px', width : '50px'}}/></div>}
    
    <div  className="card" style={{display:'flex', flexBasis:'33.33%', justifyContent:'center',alignItems:'center'}}>
        <img src={horoscope}  className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Title :  </h5>
        <p className="card-text">Description : ..</p>
        <p className="card-text">Summary : .. </p>
        <h5>Published : </h5>
        <a className='btn btn-secondary'> Read full article.. </a>
        </div>

        <img src={horoscope}  className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Title :  </h5>
        <p className="card-text">Description : ..</p>
        <p className="card-text">Summary : .. </p>
        <h5>Published : </h5>
        <a className='btn btn-secondary'> Read full article.. </a>
        </div>

        <img src={horoscope}  className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Title :  </h5>
        <p className="card-text">Description : ..</p>
        <p className="card-text">Summary : .. </p>
        <h5>Published : </h5>
        <a className='btn btn-secondary'> Read full article.. </a>
        </div>

        <img src={horoscope}  className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Title :  </h5>
        <p className="card-text">Description : ..</p>
        <p className="card-text">Summary : .. </p>
        <h5>Published : </h5>
        <a className='btn btn-secondary'> Read full article.. </a>
        </div>

        <img src={horoscope}  className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Title :  </h5>
        <p className="card-text">Description : ..</p>
        <p className="card-text">Summary : .. </p>
        <h5>Published : </h5>
        <a className='btn btn-secondary'> Read full article.. </a>
        </div>
        </div>

 </>);
  
}

export default News;

