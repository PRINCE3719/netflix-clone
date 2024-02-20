import React, { useEffect, useState } from 'react'
import "../Moviedata/Moviedata.css"
import { Link } from 'react-router-dom';





const API_KEY = "74f6531ebb590d3759cba03b3258591f";
const Moviedata = ({ movielist }) => {


   
    const [randomindex, setrandomindex] = useState(null);

    const [originalData, setoriginaldata] = useState(null);



    useEffect(() => {
        console.log("dga", movielist);
        if (movielist && movielist.length > 0) {
            let random = Math.floor(Math.random() * (movielist?.length - 1));
            let randomMovie = movielist[random];
            console.log("val", randomMovie);
            setrandomindex(randomMovie);

            fetch(`https://api.themoviedb.org/3/tv/${randomMovie.id}?api_key=${API_KEY}`, { method: "GET" })
                .then((res) => res.json())
                .then((data) => {
                    setoriginaldata(data);

                })


        }
    }, [movielist])




   

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, text.lastIndexOf(" ", maxLength)) + "...";
    };



    console.log(originalData);



    if (movielist && randomindex !== null && originalData) {

        const release = originalData.first_air_date.split("-")[0];
        console.log(release);
        let Genres = [];
        originalData.genres.map((gen) => {
            Genres.push(gen.name)
            console.log(Genres);
        });



        return (
            <div className='detail-div' style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${originalData.backdrop_path})`
            }}>
                <div className='sub-div'>
                    <h1>{originalData.name}</h1>
                    <div className='movie-d'>
                        <p id='color-grn'>{originalData.vote_average} points</p>
                        <p>{release}</p>
                        <p id='season'>{originalData.seasons.length} Seasons</p>
                    </div>
                    <p id='description'>{truncateText(originalData.overview, 150)}</p>
                    <div className='detail-bttn'>

                        <Link to="/videoPlay"><button id='play'>▶️ Play</button></Link>

                        <button id='playlist'>+ My list</button>
                    </div>
                    <p id='genres'>Genres: {Genres.join(", ")}</p>
                </div>

            </div>
        )

    }





}

export default Moviedata