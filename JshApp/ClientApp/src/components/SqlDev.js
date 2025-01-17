
import React, { Component } from 'react';
import './css/code-preview.css';
import P1 from "./images/skills/imgDocker.png";
import P2 from "./images/skills/imgAzure.png";
import P4 from "./images/skills/imgPLSQL1.png";
import P5 from "./images/skills/imgPLSQL2.png";

// const Prism = require('prismjs');

export class SqlDev extends Component {
    static displayName = SqlDev.name;


    render() {

            return (
                <section className="project py-5" id="project">
                <section className="project py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-11 text-center mx-auto col-12">
                                <div className="owl-carousel owl-theme">
                                    <div className="col-lg-8 mx-auto">
                                        <h2>Azure Sql</h2>
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
                                    <div className="col-lg-8 mx-auto">
                                        <h2>Docker</h2>
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
                                        <h2>PL/SQL - Oracle</h2>
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
                                    <div className="item">
                                        <div className="project-info">
                                            <img
                                                src={P4}
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
