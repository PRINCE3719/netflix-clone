import React, { useEffect, useState } from 'react'
import "../Header/Head.css"
import Net from "../Assets/logo.png";

const Head = ({Moviename}) => {
    const [searchitem,setsearchitem] = useState('');
    const [result,setresult] = useState([]);
    const [display,setdisplay] = useState(false);

    useEffect(()=>{
        if(Moviename){
        const Namedata =  Moviename.filter((item)=>item.toLowerCase().includes(searchitem.toLowerCase()));
            setresult(Namedata);
        }
        console.log(result);
        
    },[searchitem,Moviename])

    const search = (e)=>{
        setsearchitem(e.target.value)
        setdisplay(true);
      
    }
    return (
        <div className='main-head'>
            <div className='flex-head'>
                <div className='left-head'>
                <div className='net-logo'>
                    <img src={Net} height={38} alt=''/>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Movies</li>
                        <li>My List</li>
                    </ul>
                </nav>
                </div>
                
                <div className='search-bar'>
                    <input type='text' id='search-input' placeholder='search' onChange={search} value={searchitem}  list="movie-list"/>
                    <datalist id='movie-list'>
                        {display && result.map((res)=>(
                            <option value={res}/>
                        ))}
                    </datalist>
                    <button id='search-bttn'>Search</button>
                </div>
            </div>

        </div>
    )
}

export default Head