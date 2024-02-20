import React from 'react'
import Footer from '../Footer/Footer'
import "../css/Home.css"
import Logo from "../Assets/logo.png"
import image1 from "../Assets/feature-1.png";
import image2 from "../Assets/feature-2.png";
import image3 from "../Assets/feature-3.png";
import image4 from "../Assets/feature-4.png";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div className='body-div'>
       <div className="section1">
        <div className="header">
            <img src={Logo} alt="logo" id="logo"/>
            <div className="right-head">
                <div className="lang"><span className="material-symbols-outlined" id="translate">
                        translate
                    </span>
                    <span id="eng">English</span>
                    <span className="material-symbols-outlined">
                        arrow_drop_down
                    </span>
                </div>
                <button className="Sign-in">Sign in</button>
            </div>
        </div>
        <div className="middle-sec">
            <h1>
                Laughter. Tears. Thrills. Find it all on Netflix.</h1>
            <p>Endless entertainment starts at just ₹ 149. Cancel anytime.</p>
            <p id="seperate">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="mail-in">
                <input type="email" id="email" placeholder="Email address" autoComplete="off"/>
               <Link to="/details" style={{textDecoration:"none"}}><button className="start">Get started <span className="material-symbols-outlined">
                        navigate_next
                    </span></button></Link>
            </div>
        </div>
    </div>
    <div class="line"></div>
    <div class="section2">
        <div class="container-fluid">
            <div class="section1-in">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-6 ">
                        <h2>Enjoy on your TV</h2>
                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div class="col-md-6">
                        <img src={image1} alt="" id="tv-screen"/>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="line"></div>
    <div class="section2">
        <div class="container-fluid">
            <div class="sec-in-3">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src={image2} alt="" id="series"/>
                    </div>
                    <div class="col-md-6">
                        <h2>Download your shows to watch offline</h2>
                        <p>Save your favourites easily and always have something to watch.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="line"></div>
    <div class="section2">
        <div class="container-fluid">
            <div class="section1-in">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <h2>Watch everywhere</h2>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>

                    </div>
                    <div class="col-md-6">
                        <img src={image3} alt="feature-3" id="series-tv"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="line"></div>
    <div class="section2">
        <div class="container-fluid">
            <div class="sec-for">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src={image4} alt="feature-4" id="kids-part"/>
                    </div>
                    <div class="col-md-6">
                        <h2>Create profiles for kids</h2>
                        <p>Send children on adventures with their favourite characters in a space made just for
                            them—free
                            with
                            your membership.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="line"></div>
    <div class="questions">
        <h1>Frequently Asked Questions</h1>
        <div class="dropdown-i">
            <div class="drop1">
                <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" id="button-id"
                    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    What is Netflix?<span class="material-symbols-outlined" id="add-logo">
                        add
                    </span>
                </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body" id="collapse-div">
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                            movies,
                            anime, documentaries and more – on thousands of internet-connected devices.<br/><br/>
                            You can watch as much as you want, whenever you want, without a single ad – all for one
                            low
                            monthly price. There's always something new to discover, and new TV shows and movies are
                            added
                            every week!
                        </p>
                    </div>
                </div>
            </div>
            <div class="drop1">
                <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" id="button-id"
                    data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                    How much does Netflix cost?<span class="material-symbols-outlined" id="add-logo">
                        add
                    </span>
                </button>
                <div class="collapse" id="collapseExample1">
                    <div class="card card-body" id="collapse-div">
                        <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for
                            one
                            fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no
                            contracts.
                        </p>
                    </div>
                </div>
            </div>
            <div class="drop1">
                <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" id="button-id"
                    data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                    Where can I watch?<span class="material-symbols-outlined" id="add-logo">
                        add
                    </span>
                </button>
                <div class="collapse" id="collapseExample2">
                    <div class="card card-body" id="collapse-div">
                        <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web
                            at
                            netflix.com from your personal computer or on any internet-connected device that offers
                            the
                            Netflix app, including smart TVs, smartphones, tablets, streaming media players and game
                            consoles.<br/>
                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use
                            downloads to watch while you're on the go and without an internet connection. Take
                            Netflix
                            with you anywhere.
                        </p>
                    </div>
                </div>
            </div>
            <div class="drop1">
                <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" id="button-id"
                    data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                    How do I cancel?<span class="material-symbols-outlined" id="add-logo">
                        add
                    </span>
                </button>
                <div class="collapse" id="collapseExample3">
                    <div class="card card-body" id="collapse-div">
                        <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily
                            cancel your account online in two clicks. There are no cancellation fees – start or stop
                            your account anytime.
                        </p>
                    </div>
                </div>
            </div>
            <div class="drop1">
                <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" id="button-id"
                    data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                    What can I watch on Netflix<span class="material-symbols-outlined" id="add-logo">
                        add
                    </span>
                </button>
                <div class="collapse" id="collapseExample4">
                    <div class="card card-body" id="collapse-div">
                        <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime,
                            award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                        </p>
                    </div>
                </div>
            </div>
            <div class="drop1">
                <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" id="button-id"
                    data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">
                    Is Netflix good for kids?<span class="material-symbols-outlined" id="add-logo">
                        add
                    </span>
                </button>
                <div class="collapse" id="collapseExample5">
                    <div class="card card-body" id="collapse-div">
                        <p>The Netflix Kids experience is included in your membership to give parents control while
                            kids
                            enjoy family-friendly TV shows and films in their own space.<br/>
                            Kids profiles come with PIN-protected parental controls that let you restrict the
                            maturity
                            rating of content kids can watch and block specific titles you don’t want kids to see.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <p id="center-p">Ready to watch? Enter your email to create or restart your membership.</p>
        <div class="mail-in-two">
            <input type="email" id="email" placeholder="Email address" autoComplete='off'/>
            <button class="start">Get started <span class="material-symbols-outlined">
                    navigate_next
                </span></button>
        </div>
        <div class="line"></div>
    </div>
      <Footer/>
    </div>
  )
}
