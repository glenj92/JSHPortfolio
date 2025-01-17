import React, { Component } from 'react';
import P1 from "./images/skills/imgPLSQL.png";
import P2 from "./images/project/project-imagePrueba1.png";
import P3 from "./images/project/project-imagePrueba2.png";
import P4 from "./images/skills/imgPLSQL.png";
import P5 from "./images/project/project-imagePrueba1.png";

export class Project extends Component {
    static displayName = Project.name;

    render() {
        return (
            <section className="project py-5" id="project">
            <section className="project py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 text-center mx-auto col-12">
                            <div className="col-lg-8 mx-auto">
                                <h2>Projects I have worked on</h2>
                            </div>
                            <div className="owl-carousel owl-theme">
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
