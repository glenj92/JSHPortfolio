
import React, { Component } from 'react';
import './css/code-preview.css';
import P1 from "./images/skills/git/git1.png";

// const Prism = require('prismjs');

export class GitHub extends Component {
    static displayName = GitHub.name;


    render() {

            return (
                <section className="project py-5" id="project">
                <section className="project py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-11 text-center mx-auto col-12">
                                <div className="owl-carousel owl-theme">
                                    <div className="col-lg-8 mx-auto">
                                        <h2>Git Hub</h2>
                                    </div>
                                    <div className="item">
                                        <div className="project-info">
                                            <img
                                                src={P1}
                                                className="img-fluid"
                                                alt="project"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </section>
    
    
            );
    }
}
