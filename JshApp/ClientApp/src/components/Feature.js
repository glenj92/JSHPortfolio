import React, { Component } from 'react';

export class Feature extends Component {
    static displayName = Feature.name;

    render() {
    return(

        <section
            className="resume py-5 d-lg-flex justify-content-center align-items-center"
            id="resume"
        >
        <section className="py-5" >
            <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12">
                <h2 className="mb-4">Experiences</h2>
                <div className="timeline">
                    <div className="timeline-wrapper">
                    <div className="timeline-yr">
                        <span>2023</span>
                    </div>
                    <div className="timeline-info">
                        <h3>
                        <span>Software Developer and Engineer</span>
                        <small>OLSoftware</small>
                        </h3>
                        <p>
                        &#8226; Designing website layouts and interfaces using Visual Studio, C#, and .NET Framework. <br></br>
                        &#8226; Collaborating with customers to understand their requirements and providing tailored software solutions. <br></br>
                        &#8226; Integrating data from diverse backend services and databases. <br></br>
                        &#8226; Conducting research and extracting data from PL-SQL (Oracle) databases using DML and DDL. <br></br>
                        &#8226; Analyzing existing SQL queries for performance enhancements.

                        </p>
                    </div>
                    </div>
                    <div className="timeline-wrapper">
                    <div className="timeline-yr">
                        <span>2020</span>
                    </div>
                    <div className="timeline-info">
                        <h3>
                        <span>Web Application Developer Engineer</span>
                        <small>Horbath Technologies</small>
                        </h3>
                        <p>
                        Specialized in \customer service, accounting, invoicing, construction, and legalisation modules, resolving a persistent invoice printing issue within a collaborative team. Engaged directly with users and negotiated project scopes. Excelled in backend development, SQL queries, and API creation, enhancing technical proficiency in PL/SQL, triggers, and functions. <br></br>
                                        <b>Key Achievements:</b><br></br>
                          &#8226; Resolved a year-long invoice printing issue, showcasing problem-solving prowess. <br></br>
                          &#8226; Negotiated project scopes and costs with clients for successful project outcomes. <br></br>
                          &#8226; Enhanced technical skills in PL/SQL, Procedures, Packages, triggers, and functions. <br></br>
                          &#8226; Research required and extract data from the PL-SQL (Oracle) database engine, using DML and DDL. <br></br>
                        </p>
                    </div>
                    </div>
                    <div className="timeline-wrapper">
                    <div className="timeline-yr">
                        <span>2017</span>
                    </div>
                    <div className="timeline-info">
                        <h3>
                        <span>Web and Software Developer </span><small>Ticom S.A.</small>
                        </h3>
                        <p>
                          &#8226; Conducted thorough analysis of process needs and requirements.
                          &#8226; Designed user interfaces and ERP modules using WaveMaker, JavaScript, and Java. <br />
                          &#8226; Developed accounting, banking, performance statistics, and other modules. <br />
                          &#8226; Implemented Java services, navigating complex platform intricacies. <br />
                          &#8226; Emphasized detailed user discussions for comprehensive understanding. <br />
                          &#8226; Strengthened technical proficiency in PL/SQL, Procedures, Packages, triggers, functions and various languages.
                        </p>
                    </div>
                    </div>
                    <div className="timeline-wrapper">
                    <div className="timeline-yr">
                        <span>2016</span>
                    </div>
                    <div className="timeline-info">
                        <h3>
                        <span>Web Programmer<small>Olinsa S.A.</small>
                        </span>
                        </h3>
                        <p>
                         &#8226; Developed website layouts and user interfaces using HTML/CSS and Bootstrap. <br />
                         &#8226; Documented quality tests, supported urgent solutions, and developed modules for container inspections, service quotes, work orders, container operations, and fruit quality evaluation for export.

                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-6 col-12">
                <h2 className="mb-4 mobile-mt-2">Educations</h2>
                <div className="timeline">
                    <div className="timeline-wrapper">
                    <div className="timeline-yr">
                        <span>2021</span>
                    </div>
                    <div className="timeline-info">
                        <h3>
                        <span>Adv. Diploma of Information Technology</span>
                        <small>Academies Australasia College - Australia</small>
                        </h3>
                        <p>
                        
                        </p>
                    </div>
                    </div>
                    <div className="timeline-wrapper">
                    <div className="timeline-yr">
                        <span>2014</span>
                    </div>
                    <div className="timeline-info">
                        <h3>
                        <span>Systems Engineering</span>
                        <small>University of La Guajira - Colombia</small>
                        </h3>
                        <p>
                        </p>
                    </div>
                    </div>
                    <div className="timeline-wrapper">
                    <div className="timeline-yr">
                        <span>2011</span>
                    </div>
                    <div className="timeline-info">
                        <h3>
                        <span>Fundamentals Cisco IT Essential I </span>
                        <small>Servicio Nacional de Aprendizaje (SENA) - Colombia</small>
                        </h3>
                        <p>
                        </p>
                    </div>
                    </div>
                    <div className="timeline-wrapper">
                    <div className="timeline-yr">
                        <span>2011</span>
                    </div>
                    <div className="timeline-info">
                        <h3>
                        <span>CCNA Exploration: Basics of Networking </span>
                        <small>Servicio Nacional de Aprendizaje (SENA) - Colombia</small>
                        </h3>
                        <p>
                        </p>
                    </div>
                    </div>
                    <div className="timeline-wrapper">
                    <div className="timeline-yr">
                        <span>2011</span>
                    </div>
                    <div className="timeline-info">
                        <h3>
                        <span>Wireless Networks and LAN Switching </span>
                        <small>Servicio Nacional de Aprendizaje (SENA) - Colombia</small>
                        </h3>
                        <p>
                        </p>
                    </div>
                    </div>
                    <div className="timeline-wrapper">
                    <div className="timeline-yr">
                        <span>2008</span>
                    </div>
                    <div className="timeline-info">
                        <h3>
                        <span>Data network technician </span>
                        <small>University of Magdalena - Colombia</small>
                        </h3>
                        <p>
                        </p>
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
