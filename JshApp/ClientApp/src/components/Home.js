import React, { Component } from 'react';
import { About } from './About';
import { Project } from './Project';
import { Demo, Skills } from './Skills';
import { Feature } from './Feature';
import { Contact } from './Contact';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <>
            <About />
            {/* <Project /> */}
            <Skills />
            <Feature />
            <Contact />
        </>
    );
  }
}
