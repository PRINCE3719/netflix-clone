import React from 'react';


const Movieplay = () => {


  return (
    <div className='movie-play' style={{height:"100vh",backgroundColor:"black"}}>
      <video controls style={{height:"90vh",width:"90vw"}}>
        <source src="/video" type='video/mp4'/>
      </video>
    </div>
  );
};

export default Movieplay;
