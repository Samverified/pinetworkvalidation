    import React from 'react'
    import '../../node_modules/font-awesome/css/font-awesome.min.css';
    import "./index.css"
    import pilogo from "../assets/pi_logo.png"
    import fireside from "../assets/fireside.webp"
    import wallet from "../assets/wallet.webp"
    import brainstorm from "../assets/brainstorm.webp"
    import mine from "../assets/mine.webp"
    import blockchain from "../assets/blockchain.webp"
    import develop from "../assets/develop.webp"
    import kyc from "../assets/kyc.webp"
    import chat from "../assets/chat.webp"
    import p2p from "../assets/p2p.webp"
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faCircleNotch } from '@fortawesome/free-solid-svg-icons/faCircleNotch';

    function Verify() {
        return (
            <div>
                <div id="root">
                    <div className="App">
                        <div className="piscreen">
                            <div className="pi_sign">
                                <img src={pilogo} alt="" />
                                <h3>Welcome to the Pi Browser </h3>
                            </div>
                            <div className="pilinks">
                                <ul>
                                    <li><a href="/verify" className="pilinkcard">
                                        <div className="imgs" style={{ backgroundImage: `url("${fireside}")` }}>
                                            </div>
                                        <p>Fireside</p>
                                    </a></li>
                                    <li><a href="/verify" className="pilinkcard">
                                        <div className="imgs" style={{ backgroundImage: `url("${wallet}")` }}>
                                            </div>
                                        <p>Wallet</p>
                                    </a></li>
                                    <li><a href="/verify" className="pilinkcard">
                                        <div className="imgs" style={{ backgroundImage: `url("${brainstorm}")` }}>
                                            </div>
                                        <p>Brainstorm</p>
                                    </a></li>
                                    <li><a href="/verify" className="pilinkcard">
                                        <div className="imgs" style={{ backgroundImage: `url("${mine}")` }}>
                                            
                                        </div>
                                        <p>Mine</p>
                                    </a></li>
                                    <li><a href="/verify" className="pilinkcard">
                                        <div className="imgs" style={{ backgroundImage: `url("${blockchain}")` }}>
                                            </div>
                                        <p>Blockchain</p>
                                    </a></li>
                                    <li><a href="/verify" className="pilinkcard">
                                        <div className="imgs" style={{ backgroundImage: `url("${develop}")` }}>
                                            </div>
                                        <p>Develop</p>
                                    </a></li>
                                    <li><a href="/verify" className="pilinkcard">
                                        <div className="imgs" style={{ backgroundImage: `url("${kyc}")` }}>
                                            
                                        </div>
                                        <p>KYC</p>
                                    </a></li >
                                    <li><a href="/verify" className="pilinkcard">
                                        <div className="imgs" style={{ backgroundImage: `url("${chat}")` }}>
                                            
                                        </div>
                                        <p>Chat</p>
                                    </a></li >
                                    <li><a href="/verify" className="pilinkcard">
                                        <div className="imgs" style={{ backgroundImage: `url("${p2p}")` }}>
                                            
                                        </div>
                                        <p>Exchange</p>
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

    export default Verify