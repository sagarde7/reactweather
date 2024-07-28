import React, { useEffect, useState } from 'react'
import "./Cards.css"

function Cards() {
    const [city,setcity]=useState("");
    const [ap,setap]=useState([]);
    const [click,setclick]=useState("no");
    async function weather() {
      let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=578cd0be349153636aed5b6a40b45950`);
      let data=await response.json();
      setap([data]);

      console.log(data);
      
      console.log(ap);
    }
    // weather();
    // useEffect
    useEffect(() => {
      if(click==="no"){
        return;
      }
      weather();
    
      
    },[click])
    
  return (
    <>
    <div className="m">
            <div className="search">
            <input type="text" className="find"  onChange={(e)=>{
                setcity(e.target.value);
                console.log(city);
            }}/>
            <button className="findb" 
            onClick={()=>{
              // weather();
              // setapi([]);
              setclick("yes");
              weather();
            }}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png'></img></button>
        </div>
    <div className="mainbox">

      <div className="box">

        <div className="title">
            {city}
            </div>
            <div className="para">
            {ap &&
        ap.map((x)=>{
          return <div key={x.id} className="card">
            <div className="userid">{x.name}</div>
            <div className="titlex">{x.main.temp}</div>
          </div>
        })
      }
                </div>  
    </div>
      </div> 
      </div>
    </>
  )
}

export default Cards
