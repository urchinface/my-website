import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
<header id="home">
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
    <ul id="nav" className="nav">
      <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
      <li><a className="smoothscroll" href="#portfolio">Works</a></li>
      <li><a className="smoothscroll" href="#about">About</a></li>
{/*
      <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
      <li><a className="smoothscroll" href="#testimonials02">Testimonials</a></li>
*/}
      <li><a className="smoothscroll" href="#resume">Resume</a></li>

      <li><a className="smoothscroll" href="#contact">Contact</a></li>
    </ul> {/* end #nav */}
  </nav> {/* end #nav-wrap */}
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Sophia Staves.</h1>
      <h3 style={{color: 'white'}}>I'm a London based <span>potter</span> who enjoyes experimenting with malleable forms. Let's <a className="smoothscroll" href="#about"> start scrolling </a>
        and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
      <hr />
      <ul className="social">
     

        {/*
         <li><a href="#"><i className="fa fa-instagram" /></a></li>
        <li><a href="#"><i className="fa fa-facebook" /></a></li>
        <li><a href="#"><i className="fa fa-twitter" /></a></li>
        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
        <li><a href="#"><i className="fa fa-linkedin" /></a></li>
        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
        <li><a href="#"><i className="fa fa-skype" /></a></li>*/}
      </ul>
    </div>
  </div>
  <p className="scrolldown">
    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
  </p>
</header> {/* Header End */}

      </React.Fragment>
    );
  }
}