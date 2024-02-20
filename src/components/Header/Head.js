import React from 'react'
import "../Header/Head.css"
import Net from "../Assets/logo.png";

const Head = () => {
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
                    <input type='text' id='search-input' placeholder='search'/>
                    <button id='search-bttn'>Search</button>
                </div>
            </div>

        </div>
    )
}

export default Head