import React from 'react'
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faAngleDown, faMagnifyingGlass, faHamburger, faArrowRight, faComputer, faGlobe } from '@fortawesome/free-solid-svg-icons'
import piphone from "../assets/pi-phone.webp"
import pipic2 from "../assets/pi_pic2.png"
import piad1 from "../assets/pi_adpic1.webp"
import google from "../assets/google_playpic.webp"
import pisign from "../assets/pisign.webp"
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'


function Home() {
    return (
        <div className='home-divs'>

            <div className="home">
                <div id="root">
                    <div className="App">
                        <div className="navbar">
                            <div className="brandname">
                                Pi Network</div>
                            <ul className="expanded">
                                <li>
                                    <a href="https://minepi.com/pi-blockchain/">Pi Blockchain
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </a>
                                    <hr></hr></li><li>
                                    <a href="https://minepi.com/developers/pi-hackathon/">
                                        Developers
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </a>
                                    <hr></hr></li><li>
                                    <a href="/">About us</a><hr></hr>
                                </li><li><a href="https://minepi.com/blog/">Blog</a>
                                    <hr></hr></li><li>
                                    <a href="https://minepi.com/support/">Support</a>
                                    <hr></hr></li><li className="navlinks">
                                    <a href="https://twitter.com/PiCoreTeam">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    &nbsp; <a href="https://web.facebook.com/PiCoreTeam/?_rdc=1&amp;_rdr">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a> &nbsp;
                                    <a href="https://www.youtube.com/c/PiCoreTeam">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a> &nbsp;
                                    <a href="https://www.instagram.com/pi_network/">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li></ul>
                            <div className="queryarr">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <button className="burgerbtn">
                                    <FontAwesomeIcon icon={faBars} color='gold' />
                                </button>
                            </div>
                        </div>
                        <div className="components"><div className="banner-write-up">
                            <h1>The First Digital Currency You Can Mine On Your&nbsp; Phone</h1>
                            <p>Start mining Pi cryptocurrency today with our free, energy-light mobile app! </p>
                            <br />
                            <button>
                                <a href="/home">
                                    verify your wallet
                                    <FontAwesomeIcon className='check' icon={faCheck} />
                                </a>
                            </button>
                        </div><div className="banner-pic">
                                <img src={piphone} alt="" />
                            </div></div>
                        <div className="mid-writeup">Mining crypto is hard <br></br>Investing in crypto is risky <br></br>Too many of us are left out of the <br></br>cryptocurrency revolution...</div>
                        <div className="section-two"><div className="sect2-write-up">
                            <h2>Pi makes crypto mining easy.</h2>
                            <p>Breakthrough tech allows you to mine Pi on your phone without draining your battery</p>
                            <button>Learn The Tech Behind Pi &nbsp;
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                            <div className="sect2-pic">
                                <img src={pipic2} alt=""></img>
                            </div></div>
                        <div className="card-sect">
                            <div className="card">
                                <div className="card-icon" style={{ color: 'rgb(138, 52, 142)', marginBottom: '10%' }}>
                                    <FontAwesomeIcon icon={faSpinner} />
                                </div>
                                <h4>Decentralized</h4>
                                <p>Secure, Immutable, non-counterfeitable and interoperable digital money.</p>
                            </div>
                            <div className="card">
                                <div className="card-icon" style={{ color: ' rgb(138, 52, 142)', marginBottom: '10%' }}>
                                    <FontAwesomeIcon icon={faComputer} />
                                </div>
                                <h4>Mobile First</h4>
                                <p>Works on your mobile phone and does not drain your battery.</p>
                            </div>
                            <div className="card">
                                <div className="card-icon" style={{color: 'rgb(138, 52, 142)', marginBottom: '10%'}}>
                                    <FontAwesomeIcon icon={faGlobe}/>
                                </div>
                                <h4>User Planet Friendly</h4>
                                <p>Easy to use, secure at scale, without the massive electrical waste.</p>
                            </div></div>
                        <div className="ad">
                            <div className="ad-pic">
                                <img src={piad1} alt=""></img>
                            </div>
                            <div className="adtext">
                                <h4>Download the mobile app to start mining today! Join now.</h4>
                                <p>Keep your money! Mining Pi is free.
                                    <br></br>
                                    All you need is an invitation from an existing trusted member on the network. If you have an invitation.
                                    <br></br>
                                    you can download the mobile app below.
                                </p>
                                <a href="https://play.google.com/store/apps/details?id=com.blockchainvault">
                                    <img src={google} alt=""></img>
                                </a>
                            </div></div>
                        <footer>
                            <ul className="linksectone">
                                <li>Pi Whitepaper</li>
                                <li>Support &amp; FAQ</li>
                                <li>Terms of Service</li>
                            </ul>
                            <ul className="linksecttwo">
                                <li>Privacy Policy</li>
                                <li>Developer Terms of Use</li>
                                <li>Pi Trademark</li>
                            </ul>
                            <div>
                                <img src={pisign} alt=""></img>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home