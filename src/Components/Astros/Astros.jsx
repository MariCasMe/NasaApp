import { useEffect,useState } from "react";

const API_URL='http://api.open-notify.org/astros.json'
import './Astros.css'
const Astros=()=>{
    //Use State puede llevar un parámetro inicial. En este caso es un array vacío.
    const[astros, setAstros]=useState([[]]);

    const fetchData=()=>{
        fetch(API_URL)
        .then(res=>res.json())//Checar el error de cuando no se parsea json
        .then(data=>setAstros(data.people))
        .catch(err=>console.log(err));
    }
    useEffect(()=>{
        fetchData();
    }, []);
    
    const astrosCards=astros.map((astro)=>(
        <div className="astro--card" key={astro.name}>
            <h1 className="astro--name">
                {astro.name}
            </h1>
            <h3 className="astro--craft">
                {astro.craft}
            </h3>
        </div>

    ))
    return(
        <div className="astros--cards" >
            {astrosCards}
        </div>
    )
}
export default Astros; 