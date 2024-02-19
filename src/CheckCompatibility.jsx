import React, { useState , useEffect} from 'react';


function CheckCompatibility() {
  const [result , setResult] = useState();
  const [myName , setMyName] = useState();
  const [pName, setPName] = useState();
  
   
  const fetchdata = async () =>{
  
    const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${myName}&fname=${pName}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1a608fb8a5mshc9fd9db09c50c15p13f43cjsn35c03cebde76',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setResult(data);
    } catch (error) {
      console.error(error);
    }

  }

    useEffect(()=>{
      if (myName != null && pName != null) {
        fetchdata();
      }
      
    },[myName,pName])
  
   let date = null;
   const currDate = ()=>{
     date = new Date().toLocaleDateString();
   }
   currDate();

   const takeInput = (event) =>{
    event.preventDefault();
    const fname = event.target.elements.fname.value;
    setMyName(fname);
    const sname = event.target.elements.sname.value;
    setPName(sname);
    
   }

   return(<>
   <div className='container' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
   <form onSubmit={takeInput}>
  <div className="mb-5" >
    <label for="exampleInputEmail1" className="form-label">Your Name</label>
    <input type="text" className="form-control" id="fname" aria-describedby="emailHelp" placeholder='Type here..'/>
  </div>
 
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Partern's Name</label>
    <input type="text" className="form-control" id="sname" placeholder='Type here..'/>
  </div>
  
  <div className="mb-3" style={{display : "flex", justifyContent : 'center' }}>
  <button type="submit" className="btn btn-primary">Submit</button>   
  </div>
 
</form>
  
  {result && Object.keys(result).length > 0 ? (
     <div className="card" style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
     <img src='https://source.unsplash.com/featured/?couple' className="card-img-top" alt="..."/>
   <div className="card-body">
     <h4>{date}</h4>
     <h5 className="card-title">{result.sname} 💗 {result.fname}</h5>
     <p className="card-text">Chances of successful love relationship 👫 : {result.percentage}%</p>
     <p className="card-text">Suggestion : {result.result} </p>
   </div>
 </div>
  ) : (<h4 style={{justifyContent : 'center', display : 'flex'}}>Search for checking comatibility with your partner ❤️</h4>) }
 
  
 </div> </>)
}

export default CheckCompatibility;