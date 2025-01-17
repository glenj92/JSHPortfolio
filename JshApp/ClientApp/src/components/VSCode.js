
import React, { Component } from 'react';
import './css/code-preview.css';

import P1 from "./images/skills/imgC1.png";
import P2 from "./images/skills/imgC2.png";
import P3 from "./images/skills/imgC3.png";
import P4 from "./images/skills/imgReact1.png";
import P5 from "./images/skills/imgReact2.png";

export class VSCode extends Component {
    static displayName = VSCode.name;

    

   

    render() {
       
            return (
                <section className="project py-5" id="vscode">
                <section className="project py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-11 text-center mx-auto col-12">
                                <div className="owl-carousel owl-theme">
                                    <div className="col-lg-8 mx-auto">
                                        <h2>C# .Net, SOLID Principles</h2>
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
                                                src={P2}
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
                                    <br/>
                                    <div className="col-lg-8 mx-auto">
                                        <h2>ReactJs</h2>
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
