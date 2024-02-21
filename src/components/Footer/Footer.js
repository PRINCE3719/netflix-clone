import React from 'react'
import "../css/Footer.css"

export default function Footer() {
  return (
    <div className='footer-body'>
        <div class="line"></div>
      <div className="footer-sec">
            <div className="footer-in">
                <p id='footer-q'>Questions? Call <a href="#">000-800-919-1694</a></p>
                <div className="footer-flex">
                    <div className="footer-1">
                        <a href="#">FAQ</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Privacy</a>
                        <a href="#">Speed Test</a>
                    </div>
                    <div className="footer-1">
                        <a href="#">Help Centre</a>
                        <a href="#">Jobs</a>
                        <a href="#">Cookie Preferences</a>
                        <a href="#">Legal Notices</a>
                    </div>
                    <div className="footer-1">
                        <a href="#">Account</a>
                        <a href="#">Ways to Watch</a>
                        <a href="#">Corporate Information</a>
                        <a href="#">
                            Only on Netflix</a>
                    </div>
                    <div className="footer-1">
                        <a href="#">
                            Media Centre</a>
                        <a href="#">
                            Terms of Use</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <div class="lang-2"><span className="material-symbols-outlined" id="translate">
                        translate
                    </span>
                    <span id="eng">English</span>
                    <span className="material-symbols-outlined">
                        arrow_drop_down
                    </span>
                </div>
                <p>Netflix India</p>
            </div>
        </div>
    </div>
  )
}
