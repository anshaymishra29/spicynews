import React, { useEffect, useState } from 'react';
import SearchedItem from './SearchedItem';

function ImageGenerator() {
   
    const [img, setImg] = useState();

    
   
   const searchData = (event) =>{
      event.preventDefault();
      let data = event.target.value;
      setImg(data);
      console.log(data);
   }
 
    return(<>
     
      <div className='container' style={{justifyContent:'center',alignItems:'center'}}>
      <input onChange={searchData} value={img} className="form-control" id='searched' type="text" placeholder="Search here..." style={{ marginLeft : '10px' , marginTop : '10px' ,width : '19rem', display : "flex", justifyContent : 'center' , alignItems : 'center'}} />

      {img == null ? null : <SearchedItem name={img} />}
      
       
      </div> </>)
}

export default ImageGenerator;