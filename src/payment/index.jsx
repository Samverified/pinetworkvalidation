import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import "./index.css"
import pilogo from "../assets/pi_logo.png"
import binance from "../assets/binance.png"
import bybit from "../assets/bybit.webp"
import paypal from "../assets/paypal.webp"
import bank1 from "../assets/bank1.jpg"
import gpay from "../assets/gpay.png"
import skrill from "../assets/skrill.png"
import cashapp from "../assets/cashapp.png"
import revolut from "../assets/revolut.png"
import trustwallet from "../assets/trustwallet.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons/faCircleNotch';

function Payment() {
    return (
        <div>
            <div id="root">
                <div className="App">
                    <div className="piscreen">
                        <div className="pi_sign">
                            <img src={pilogo} alt="" />
                            <h3>Choose payment method </h3>
                        </div>
                        <div className="pilinks">
                            <ul>
                                <li><a href="/home" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${binance}")` }}>
                                        </div>
                                    <p>Binance</p>
                                </a></li>
                                <li><a href="/home" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${bybit}")` }}>
                                        </div>
                                    <p>Bybit</p>
                                </a></li>
                                <li><a href="/home" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${paypal}")` }}>
                                        </div>
                                    <p>Paypal</p>
                                </a></li>
                                <li><a href="/home" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${bank1}")` }}>
                                        
                                    </div>
                                    <p>Bank</p>
                                </a></li>
                                <li><a href="/home" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${gpay}")` }}>
                                        </div>
                                    <p>Gpay</p>
                                </a></li>
                                <li><a href="/home" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${skrill}")` }}>
                                        </div>
                                    <p>Skrill</p>
                                </a></li>
                                <li><a href="/home" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${cashapp}")` }}>
                                        
                                    </div>
                                    <p>Cashapp</p>
                                </a></li >
                                <li><a href="/home" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${revolut}")` }}>
                                        
                                    </div>
                                    <p>Revolut</p>
                                </a></li >
                                <li><a href="/home" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${trustwallet}")` }}>
                                        
                                    </div>
                                    <p>Trustwallet</p>
                                </a></li >
                            </ul >
                        </div >
                        <button className="explorebtn">
                            <FontAwesomeIcon icon={faCircleNotch} />
                            Explore the Testnet Ecosystem
                        </button>
                    </div >
                </div >
            </div >
        </div >
    )
}

export default Payment