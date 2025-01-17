import React, { Component } from 'react';
import profilePic from "./images/undraw/JProtfolio8.jpg";


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
                                        href="#contact"
                                        className="btn call custom-btn custom-btn-bg custom-btn-link"
                                    >
                                        <i className="uil uil-file-alt" /> Call +61 406 148 849
                                    </a>
                                    <a href="#contact" className="btn mr-lg-2 custom-btn">
                                        <i className="uil uil-file-alt" /> josh.glen.92@gmail.com
                                    </a>
                                    <a href="https://www.linkedin.com/in/josh-brito-79b975182/" target="_blank" className="btn mr-lg-2 custom-btn">
                                        <i className="uil uil-file-alt" /> @josh-brito
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
