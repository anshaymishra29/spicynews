import React from "react";

const SearchedItem = (props)=>{
   
   
   return(<>
    <div className="container">
    <img src={`https://source.unsplash.com/featured/?${props.name}`} alt="image" style={{ borderRadius : '20px', marginTop : '10px', width:'20rem', height:'23rem'}}/>
    </div> 
    </>);
}

export default SearchedItem;