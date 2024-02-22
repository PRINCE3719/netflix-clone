import React, { useEffect, useState } from 'react'

const APIKEY="74f6531ebb590d3759cba03b3258591f";
const api= `https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${APIKEY}`;

export default function Horror() {
    const [movielist,setmovielist] = useState([]);
    const [scroll,setscroll] = useState(0);

    const leftarrow = ()=>{
        let x= scroll + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setscroll(x);
    }

    const rightarrow = () => {
        let x = scroll - Math.round(window.innerWidth / 2);
        let listW = movielist.results?.length * 200;
        if (window.innerWidth - listW > x) {
          x = window.innerWidth - listW - 60;
        }
        setscroll(x);
      };
      useEffect(()=>{
        fetch(api,{method:"GET"})
        .then((res)=>res.json())
        .then((data)=>{
            setmovielist(data);
        })
    },[])
  return (
    <div className='horizontal-list'>
    <h3 id='m-title'>Horror</h3>
    <div className='left-arrow'>
        <img src='https://img.icons8.com/ios-glyphs/50/FFFFFF/chevron-left.png' alt='' onClick={leftarrow} />
    </div>
    <div className='right-arrow'>
        <img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/chevron-right.png" alt='' onClick={rightarrow} />
    </div>


    <div className='scroll-section' style={{ marginLeft: scroll }}>

        {movielist.results?.length > 0 && movielist.results.map((item) => (
            <div className='scroll-item' key={item.id}>
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt='' id='img-list' />
            </div>
        ))}
    </div>

</div>
  )
}
