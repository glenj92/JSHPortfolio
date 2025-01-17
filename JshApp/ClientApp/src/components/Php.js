
import React, { Component } from 'react';
import './css/code-preview.css';
import P1 from "./images/skills/php/marcoProjectPHP.png";
import P2 from "./images/skills/php/marcoProjectPHP2.png";
import P4 from "./images/skills/php/codingPHP.png";
import P5 from "./images/skills/php/DBDiagram.png";

// const Prism = require('prismjs');

export class Php extends Component {
    static displayName = Php.name;


    render() {

            return (
                <section className="project py-5" id="project">
                <section className="project py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-11 text-center mx-auto col-12">
                                <div className="owl-carousel owl-theme">
                                    <div className="col-lg-8 mx-auto">
                                        <h2>PHP Project</h2>
                                    </div>
                                    <div className="item">
                                        <div className="project-info">
                                            <img
                                                src={P2}
                                                className="img-fluid"
                                                alt="project"
                                            />
                                        </div>
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
                                    <div className="col-lg-8 mx-auto">
                                        <h2>PHP Coding</h2>
                                    </div>
                                    <div className="item">
                                        <div className="project-info">
                                            <img
                                                src={P4}
                                                className="img-fluid"
                                                alt="project"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-8 mx-auto">
                                        <h2>Database diagram</h2>
                                    </div>
                                    <div className="item">
                                        <div className="project-info">
                                            <img
                                                src={P5}
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
