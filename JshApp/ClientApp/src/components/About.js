import React, { Component } from 'react';
import profilePic from "./images/undraw/JProtfolio7.jpg";
import resumeEN from './files/ResumeEnglish.pdf';
import resumeES from './files/ResumeEspanol.pdf';
import { ReactComponent as GitHubLogo } from './images/undraw/uil--github.svg';
import { ReactComponent as LinkedInLogo } from './images/undraw/uil--linkedin.svg';
import { ReactComponent as PhoneLogo } from './images/undraw/uil--phone.svg';
import { ReactComponent as DownloadFile } from './images/undraw/uil--file-download-alt.svg';
import { ReactComponent as EmaildFile } from './images/undraw/uil--envelope.svg';

export class About extends Component {
    static displayName = About.name;
    constructor(props) {
        super(props);
        this.state = {
            language: "en", // Idioma por defecto
        };
    }

    handleLanguageChange = (event) => {
        this.setState({ language: event.target.value });
    };

    render() {

        const { language } = this.state;

        const resumeLink = language === "es" ? resumeES : resumeEN;

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
                                    <span className="mobile-block">my name is Josh!</span>
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
                                    <a
                                        href="https://wa.me/573053062521" target="_blank"
                                        className="btn call custom-btn custom-btn-bg custom-btn-link"
                                    >
                                        <PhoneLogo /> Call - WhatsApp  +57 305 306 2521
                                    </a>
                                    {" "}
                                    <a href={resumeLink} target="_blank" className="btn mr-lg-2 custom-btn">
                                        <i className="file-logo" /> <DownloadFile /> Download Resume
                                    </a>
                                    {" "}
                                    <select
                                        value={language}
                                        onChange={this.handleLanguageChange}
                                        className="language-select border px-3 py-2 rounded cursor-pointer"
                                    >
                                        <option value="en">🇦🇺 English</option>
                                        <option value="es">🇨🇴 Español</option>
                                    </select>
                                </div>
                                <div className="custom-btn-group mt-4">
                                    <a href="https://github.com/glenj92" target="_blank" className="btn mr-lg-2 custom-btn">
                                        <i className="github-icon" /> <GitHubLogo /> @glenj92
                                    </a>
                                    {" "}
                                    <a href="https://www.linkedin.com/in/josh-brito-79b975182/" target="_blank" className="btn mr-lg-2 custom-btn">
                                        <i className="linkedin-logo" /> <LinkedInLogo /> @josh-brito
                                    </a>
                                    {" "}
                                    <a href="#contact" className="btn mr-lg-2 custom-btn">
                                        <i className="email-logo" /> <EmaildFile /> josh.glen.92@gmail.com
                                    </a>
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
