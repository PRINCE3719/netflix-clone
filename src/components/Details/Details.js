import React, { useEffect, useState } from 'react'
import Head from '../Header/Head';
import Moviedata from '../Moviedata/Moviedata';

import Footer from '../Footer/Footer';
import Originals from '../MovieList/Originals';
import History from '../MovieList/History';
import Action from '../MovieList/Action';
import Horror from '../MovieList/Horror';


export default function Details() {
  const [moviedata , setmoviedata] = useState();
  const [Name,setName] = useState([]);
 
  useEffect(()=>{
    const Getmovie = () => {
      fetch("https://api.themoviedb.org/3//discover/tv?with_networks=213&api_key=74f6531ebb590d3759cba03b3258591f",{method:"GET"})
        .then((res) => res.json())
        .then((data) => {
          console.log("movie", data.results);
          setmoviedata(data.results);
        })
        
    }



    Getmovie();
   
  
  },[])

  useEffect(()=>{
    if(moviedata?.length > 0){
      const nameData = moviedata.map((item)=>item.name);
      setName(nameData);
    }
  },[moviedata])




  
  return (
    <div style={{backgroundColor:"black"}}>
      <Head Moviename = {Name}/>
      <Moviedata movielist = {moviedata}/>
      <Originals/>
      <History/>
      <Action/>
      <Horror/>
      <Footer/>
      

    </div>
  )


}
