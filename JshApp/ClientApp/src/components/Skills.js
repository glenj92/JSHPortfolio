import React, { Component } from "react";
import './css/style.css';
import Pic1 from "./images/skills/imgCRUD.png";
import Pic2 from "./images/skills/imgAzure.png";
import Pic3 from "./images/skills/imgVSForm.jpg";
import Pic4 from "./images/skills/imgVSCode.png";
import Pic5 from "./images/skills/php/marcoProjectPHP.png";
import Pic6 from "./images/skills/git/git1.png";
import Icon from "./images/project/icon.png";

export class Skills extends Component {
    static displayName = Skills.name;

    render() {
        return (

            <section className="skills py-5" id="skills">
                <br/><br/>
            <section className="home_gallery_area p_120 py5">
                <div className="container">
                    <div className="row gallery_f_inner imageGallery1">
                        <div className="col-lg-11 text-center mx-auto col-12">


                            <div className=" col-lg-8 mx-auto">
                                <h2>Latest Skills</h2>
                                <p>Who are in extremely love with system.</p>
                            </div>
                            <br />


                            <div className="row">

                                <div className=" col-lg-4 col-md-4 col-sm-6">
                                    <div className="h_gallery_item">
                                        <div className="g_img_item">
                                            <img
                                                className="img-fluid"
                                                src={Pic1}
                                                alt=""
                                            />
                                            <a className="light" href="/fetch-data">
                                                <img src={ Icon} alt="" />
                                            </a>
                                        </div>
                                        <div className="g_item_text">
                                            <h4>CRUD Design</h4>
                                            <p>React js/Bootstrap</p>
                                        </div>
                                    </div>
                                </div>


                                <div className=" col-lg-4 col-md-4 col-sm-6">
                                    <div className="h_gallery_item">
                                        <div className="g_img_item">
                                            <img
                                                className="img-fluid"
                                                src={Pic2}
                                                alt=""
                                            />
                                            <a className="light" href="/sql-dev">
                                                <img src={Icon} alt="" />
                                            </a>
                                        </div>
                                        <div className="g_item_text">
                                            <h4>Database, Azure, Docker</h4>
                                            <p>Oracle PL/SQL, MS SQL, MySQL</p>
                                        </div>
                                    </div>
                                </div>


                                <div className=" col-lg-4 col-md-4 col-sm-6">
                                    <div className="h_gallery_item">
                                        <div className="g_img_item">
                                            <img
                                                className="img-fluid"
                                                src={Pic4}
                                                alt=""
                                            />
                                            <a className="light" href="/vs-code">
                                                <img src={Icon} alt="" />
                                            </a>
                                        </div>
                                        <div className="g_item_text">
                                            <h4>C# Development, JavaScript</h4>
                                            <p>.Net C#, Visual Studio Code, ReactJs</p>
                                        </div>
                                    </div>
                                </div>


                                <div className=" col-lg-4 col-md-4 col-sm-6">
                                    <div className="h_gallery_item">
                                        <div className="g_img_item">
                                            <img
                                                className="img-fluid"
                                                src={Pic3}
                                                alt=""
                                            />
                                            <a className="light" href="/smartflex">
                                                <img src={Icon} alt="" />
                                            </a>
                                        </div>
                                        <div className="g_item_text">
                                            <h4>Open Smartflex</h4>
                                            <p>Visual studio, PL/SQL, Crystal Report</p>
                                        </div>
                                    </div>
                                </div>


                                <div className=" col-lg-4 col-md-4 col-sm-6">
                                    <div className="h_gallery_item">
                                        <div className="g_img_item">
                                            <img
                                                className="img-fluid"
                                                src={Pic6}
                                                alt=""
                                            />
                                            <a className="light" href="/github">
                                                <img src={Icon} alt="" />
                                            </a>
                                        </div>
                                        <div className="g_item_text">
                                            <h4>Repository</h4>
                                            <p>Git Terminal, Git Hub</p>
                                        </div>
                                    </div>
                                </div>


                                <div className=" col-lg-4 col-md-4 col-sm-6">
                                    <div className="h_gallery_item">
                                        <div className="g_img_item">
                                            <img
                                                className="img-fluid"
                                                src={Pic5}
                                                alt=""
                                            />
                                            <a className="light" href="/php">
                                                <img src={Icon} alt="" />
                                            </a>
                                        </div>
                                        <div className="g_item_text">
                                            <h4>PHP Development</h4>
                                            <p>PHP, HTML, Css</p>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
                <br /><br /><br />
            </section>
            </section>




        );

    }


}