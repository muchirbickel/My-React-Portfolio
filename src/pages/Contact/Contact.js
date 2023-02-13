import { useState } from "react";
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import "./contact.css"

function Contact() {

    const [formObject, setFormObject] = useState({})

    function loading() {
        document.getElementById("exampleFormControlInput1").style.opacity = "0.3";
        document.getElementById("exampleFormControlInput2").style.opacity = "0.3";
        document.getElementById("exampleFormControlTextarea1").style.opacity = "0.3";
        document.getElementById("loader").style.display = "block";
    }
    var myVar
    function showMsg() {
        myVar = setTimeout(showPage, 1200);
    }

    function showPage() {
        document.getElementById("form-card").style.display = "none";
        document.getElementById("loader").style.display = "none";
        document.getElementById("msgSentCard").style.display = "block";
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v8jpah3', 'template_1q5wguh', form.current, 'user_rdfOXx7Nnrnex29ZxAMhD')
            .then((result) => {
                console.log(result.text);
                showMsg()
            }, (error) => {
                console.log(error.text);
                alert("FAILED...", error);
            });
    };


    return (
        <div id="contact">
            <div className="container">
                <h1>CONTACT ME</h1>
                <div className="row">
                    <div className="col" id="contact-detail">
                        <p><i class="bi-telephone"></i> Phone: +1 862-339-8389</p>
                        <p><i class="bi-envelope"></i> Email: kevkouadio@gmail.com</p>
                        <p><i class="bi-github"></i> GitHub: <a href="https://github.com/kevkouadio/" target="blank">https://github.com/kevkouadio/</a></p>
                        <p><i class="bi-linkedin"></i> Linkdin: <a href="https://www.linkedin.com/in/kouassi-kevin-kouadio-b731a071/" target="blank">Kouassi Kevin KOUADIO</a></p>
                    </div>
                    <div className="col">
                        <div className="form-card" id="form-card">
                            <div className="card-body">
                                <h2 className="p-2 border-bottom">Send me an email</h2>
                                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Name</label>
                                        <input type="text" onChange={handleInputChange} name="user_name" className="form-control rounded-pill" id="exampleFormControlInput1" placeholder="Your Name" />
                                    </div>
                                    <div id="loader">
                                        <div class="dot" id="dot1"></div>
                                        <div class="dot" id="dot2"></div>
                                        <div class="dot" id="dot3"></div>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Email address</label>
                                        <input type="email" name="user_email" onChange={handleInputChange} className="form-control rounded-pill" id="exampleFormControlInput2" placeholder="name@example.com" />
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea name="message" onChange={handleInputChange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <br />
                                    <input className="btn btn-primary" type="submit" value="Send" disabled={!(formObject.user_name && formObject.user_email && formObject.message)} onClick={loading} />
                                </form>
                            </div>
                        </div>

                        <div className="card animate-bottom" id="msgSentCard" >
                            <div className="card-body hidden">
                                <h2 className="card-title text-success">Message Sent!</h2>
                                <p className="card-text text-dark">Thanks for contacting me! I will be in touch with you shortly.</p>
                                {/* <button class="btn btn-primary" onSubmit={sendNewMsg}>send a new message</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact
