import React, { Component } from 'react';
import profilePic from "./images/undraw/JProtfolio7.jpg";
import resumeEN from './files/ResumeEnglish.pdf';
import resumeES from './files/ResumeEspanol.pdf';

export class About extends Component {
    static displayName = About.name;

    render() {
        return (

            <section
                className="about full-screen d-lg-flex justify-content-center align-items-center"
                id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                            <div className="about-text">
                                <small className="small-text">
                                    Welcome, {" "}
                                    <span className="mobile-block">my name is Josh Brito!</span>
                                </small>
                                <h1 className="animated animated-text">
                                    <span className="mr-2">Hello, I'm a </span>
                                    <div className="animated-info">
                                        <span className="animated-item">Software Developer</span>
                                        <span className="animated-item">Web Developer</span>
                                        <span className="animated-item">Full-Stack Developer</span>
                                    </div>
                                </h1>
                                <p>
                                    Building a successful product is a challenge.  My expertise lies in troubleshooting and resolving complex technical issues. Programming experience and analytical problem-solving skills, particularly in backend systems. I am highly energetic in web development.
                                </p>
                                <div className="custom-btn-group mt-4">
                                    <a href={resumeEN} target="_blank" className="btn mr-lg-2 custom-btn">
                                        <i className="uil uil-file-alt" /> Download Resume
                                    </a>
                                    <a
                                        href="#contact"
                                        className="btn call custom-btn custom-btn-bg custom-btn-link"
                                    >
                                        Call +61 406 148 849
                                    </a>
                                    {/* <a href={resumeES} target="_blank" className="btn mr-lg-2 custom-btn">
                                        <i className="uil uil-file-alt" /> Download Resume ES
                                    </a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-12">
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
