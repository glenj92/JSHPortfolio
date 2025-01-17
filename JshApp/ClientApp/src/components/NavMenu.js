import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './css/navMenu.css';
//import './css/code-preview.css';


export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = { isToggleOn: false };
    }

    toggleNavbar() {
        console.log("llama a la funcion toggleNavbar");
        this.setState({
            _isToggleOn: !this.state.isToggleOn,
            get isToggleOn() {
                return this._isToggleOn;
            },
            set isToggleOn(value) {
                this._isToggleOn = value;
            },
        });
        console.log('muestra el estado del Toggle (ON, OFF):' + this.state.isToggleOn);
    }

    render() {

        return (


            <>

                <nav className="navbar navbar-expand-sm navbar-light headroom">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <i className="uil uil-user" /> Josh
                </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                            <span className="navbar-toggler-icon" />
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <span data-hover="About">About</span>
                                    </a>
                                </li>
                                {/* <li className="nav-item">
                                    <a href="#project" className="nav-link">
                                        <span data-hover="Projects">Projects</span>
                                    </a>
                                </li> */}
                                <li className="nav-item">
                                    <a href="#skills" className="nav-link">
                                        <span data-hover="Skills">Skills</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#resume" className="nav-link">
                                        <span data-hover="Resume">Resume</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contact" className="nav-link">
                                        <span data-hover="Contact">Contact</span>
                                    </a>
                                </li>
                                {/* <li className="nav-item">
                                    <a href="/fetch-data" className="nav-link">
                                        <span data-hover="Forecast">Forecast</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/counter" className="nav-link">
                                        <span data-hover="Counter">Counter</span>
                                    </a>
                                </li> */}
                            </ul>
                            <ul className="navbar-nav ml-lg-auto">
                                <div className="ml-lg-4">
                                    {/* <div onClick={this.toggleNavbar} className="color-mode d-lg-flex justify-content-center align-items-center">
                                        <i className={this.state.isToggleOn ? 'color-mode-icon active' : 'color-mode-icon'}  />
                                        Color mode
                                    </div> */}
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}
