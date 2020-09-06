/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';

class Header extends React.Component {
  constructor(props) {
    let isDesktop;
    let isMobile;
    super(props);
    if (window.innerWidth > 769) {
      isDesktop = true;
      isMobile = false
    } else {
      isDesktop = true;
      isMobile = false;
    }
    this.state = {
      visible: false,
      mobile: isMobile,
      desktop: isDesktop
    };
  }

  componentDidMount() {
    this.setState({ visible: true, });
  }

  render() {

    return (
      <section id="hero" className="jumbotron" visible={this.state.visible}>
        <Container>
          <Fade left={this.state.desktop} bottom={this.state.mobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              I am <span className="text-color-main">Shiv Sarthak Sabhlok</span>
              <br />
              <div className="hero-subtitle">
                {"I'm a "}
                
                <Typewriter
                  options={
                    {
                      strings: [' Developer.', ' Creative Designer.', ' Learner.'],
                      autoStart: true,
                      loop: true
                    }
                  }
                />
              </div>
            </h1>
          </Fade>
          <Fade left={this.state.desktop} bottom={this.state.mobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  Know more
                </Link>
              </span>
            </p>
          </Fade>
        </Container>
      </section>
    );
  }
}


export default Header;
