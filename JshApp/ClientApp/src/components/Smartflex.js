
import React, { Component } from 'react';
import './css/code-preview.css';

import P1 from "./images/skills/imgVSForm.jpg";
import P2 from "./images/skills/imgVSForm1.jpg";
import P6 from "./images/skills/imgVSForm2.jpg";
import P7 from "./images/skills/imgVSForm3.jpg";
import P8 from "./images/skills/imgVSForm4.jpg";
import P3 from "./images/skills/imgPLSQL.png";
import P4 from "./images/project/project-imagePrueba2.png";
import P5 from "./images/project/project-imagePrueba1.png";

export class Smartflex extends Component {
    static displayName = Smartflex.name;

    

   

    render() {
       
            return (
                <section className="project py-5" id="project">
                <section className="project py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-11 text-center mx-auto col-12">
                                <div className="owl-carousel owl-theme">
                                    <div className="col-lg-8 mx-auto">
                                        <h2>SmartFlex</h2>
                                    </div>
                                    <div className="item">
                                        <div className="project-info">
                                            <img
                                                src={P7}
                                                className="img-fluid"
                                                alt="project"
                                            />
                                        </div>
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
                                                src={P6}
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
                                    <div className="item">
                                        <div className="project-info">
                                            <img
                                                src={P8}
                                                className="img-fluid"
                                                alt="project"
                                            />
                                        </div>
                                    </div>
                                    <br/>
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
                                                src={P3}
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
