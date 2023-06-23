import { useEffect,useState } from "react";
import './Apod.css'
const API_APOD= 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

const Apod=()=>{
    const [apod,setApod]=useState({});
    
    const fetchApod= () => {
            fetch(API_APOD).
            then(res=>res.json()).
            then(data=>setApod(data)).
            catch(err=>console.log(err))
    }

    useEffect(()=>{
       fetchApod();
        console.log(apod);
    },[]);

    return(
        <div className="apod-card" >
            <h1 className="card-title">{apod.title}</h1>
            <h3 className="card-date">{apod.date} </h3>
            <img src={apod.url} alt="image of the day" className="card-image"/>
            <p className="card-explanation">{apod.explanation}</p>
        </div>
    )

    
}
export default Apod;