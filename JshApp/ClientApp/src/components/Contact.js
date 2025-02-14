import React, { Component } from 'react';
import profilePic from "./images/undraw/JProtfolio8.jpg";
import { ReactComponent as PhoneLogo } from './images/undraw/uil--phone.svg';
import { ReactComponent as EmaildFile } from './images/undraw/uil--envelope.svg';


export class Contact extends Component {
    static displayName = Contact.name;

    render() {
        return (

            <section
                className="contact full-screen d-lg-flex justify-content-center align-items-center"
                id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-12 d-flex align-items-center">
                            <div className="about-text">
                                <h1 className="animated animated-text">
                                    <span className="mr-2">CONTATCT ME by </span>
                                    <div className="animated-info">
                                        <span className="animated-item"> E-mail</span>
                                        <span className="animated-item"> Phone call</span>
                                        <span className="animated-item"> LinkedIn</span>
                                    </div>
                                </h1>
                                <div className="custom-btn-group mt-4">
                                    <a
                                        href="https://wa.me/573053062521" target="_blank"
                                        className="btn call custom-btn custom-btn-bg custom-btn-link"
                                    >
                                        <PhoneLogo /> Call - WhatsApp  +57 305 306 2521
                                    </a>
                                    {" "}
                                    <a href="#contact" className="btn mr-lg-2 custom-btn">
                                        <i className="email-logo" /> <EmaildFile /> josh.glen.92@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-12">
                            <div className="about-image svg">
                                <img
                                    src={profilePic}
                                    className="img-fluid"
                                    alt="svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        );
    }
}
