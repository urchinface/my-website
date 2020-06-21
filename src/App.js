import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import Testimonials02 from  './components/testimonials02/testimonials02';
import Testimonials03 from  './components/testimonials03/testimonials03';
import ContactUs from './components/contactus/contactus';
import TwoBoxes from './components/twoboxes/twoboxes';
import Footer from './components/footer/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TwoBoxes />
        <Portfolio />
        <Testimonials />
        <About />
        <Testimonials02 />
        <Resume />
        <Testimonials03 />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}export default App;