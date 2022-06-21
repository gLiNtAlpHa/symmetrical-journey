
import React from "react";

import classnames from "classnames";



import {
  Badge,
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";


import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import Download from "../IndexSections/Download.js";
import { Link } from "react-router-dom";
import AdSense from 'react-adsense';


class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                      Looking for a First-Class Cryptocurrency Expert ?{" "}
                      </h1>
                      <p className="lead text-white">
                      Voltency platform comes from a team of traditional capital market veterans and 
                      blockchain experts who have already left their mark in the crypto world.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          to = "/signup"
                          tag={Link}
                          color="info"
                         
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-spaceship" />
                          </span>
                          <span className="btn-inner--text">Get Started</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          to = "/login"
                          tag={Link}
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-curved-next" />
                          </span>
                          <span className="btn-inner--text">
                            Sign In
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
<AdSense.Google
      client='ca-pub-4198852474010352'
      slot = '9700430239'
    
    />
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                          FAST TRANSACTION
                          </h6>
                          <p className="description mt-3">
                          We have successfully completed over 40 millions transaction for 
                          31,214 customers from 45 countries.The average execution time is 0054 seconds
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              FAST
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              SECURE
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              SAFE
                            </Badge>
                          </div>
                        
                        </CardBody>
                      </Card>
                    </Col>
<AdSense.Google
      client='ca-pub-4198852474010352'
      slot = '9700430239'
    
    />
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-chat-round" />
                          </div>
                          <h6 className="text-success text-uppercase">
                          FREE CONSULTING
                          </h6>
                          <p className="description mt-3">
                          We understand the new dimension of threats being introduced by 
                          the cryptocurrency market and how it's affecting the financial landscape. 
                          We're here to listen to your needs, focus on how we can help, 
                          and implement new mechanisms that provide you with an opportunity 
                          to  grow your portfolio.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                            Smart decisions
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                            Regulatory response
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                            Credit solutions
                            </Badge>
                          </div>
                          
                        </CardBody>
                      </Card>
                    </Col>
<AdSense.Google
      client='ca-pub-4198852474010352'
      slot = '9700430239'
    
    />
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-money-coins" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                          24/7 TRADING
                          </h6>
                          <p className="description mt-3">
                          24/7 Trading provides our international investors with live trading platforms to invest in Cryptocurrencies,
                          Stocks, Commodities and more. Receive market analysis, 
                          indicators to trade successfully..
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                            Anywhere
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                            Anytime
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                             Trading
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
<AdSense.Google
      client='ca-pub-4198852474010352'
      slot = '9700430239'
    
    />
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/square2.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-chart-bar-32" />
                    </div>
                    <h3>Financing Potential Beyond Traditional Markets</h3>
                    <p>
                    Voltency is led by an experienced and dedicated team of business, finance and 
                    technology veterans with a shared vision of redefining the world of finance and crypto trading. 
                     Voltency creates a regulated, transparent, and trusted crypto trading platform.
                    </p>
                   
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
                         <AdSense.Google
      client='ca-pub-4198852474010352'
      slot = '9700430239'
    
    />
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  
                <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/coinsecurity.jpg")}
                  />
                 
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-lock-circle-open" />
                    </div>
                    <h3>A New Security Trading Platform</h3>
                    <p className="lead">
                    Voltency through it's affiliated broker-dealer, LLC aims to be the primary trading platform for registered digital securities 
                    where issuers can list, and investors can trade, digital securities safely.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Safe and Secure
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
<AdSense.Google
      client='ca-pub-4198852474010352'
      slot = '9700430239'
    
    />
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid floating"
                      src={require("assets/img/theme/trading.png")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Customer interests are the most important</h4>
                      <p className="text-white">
                      Take advantage of our first-class training courses, follow the recommendations 
                     of professional analysts, contact the support department at any time.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                          We constantly strive to improve the quality of services so that
                          you always feel confident in achieving financial goals with a reliable partner.
                          </p>
                         
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                           <AdSense.Google
      client='ca-pub-4198852474010352'
      slot = '9700430239'
    
    />
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                          Platform Review
                          </h5>
                          <p>
                          A trading platform with an intuitive interface provides convenient and 
                          quick access to markets. Make successful deals from anywhere in the world.
                          </p>
                          
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">The amazing Team</h2>
                  <p className="lead text-muted">
                  Our Mission is to Bring Regulated Digital Asset Opportunities to All Investors, and we have the team to make it happen. With the combination of our traditional markets
                  expertise and disruptive fintech approach.Voltency is led by an experienced and dedicated team of business, finance and technology veterans with a shared vision of redefining the world of finance and crypto trading and investment.
                  Voltency creates a regulated, transparent, and trusted cryptocurrency investment & trading platform.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/david.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">David Weild</span>
                        <small className="h6 text-muted">Chairman of the Board</small>
                      </h5>
                    </div>
                  </div>
                </Col>
<AdSense.Google
      client='ca-pub-4198852474010352'
      slot = '9700430239'
    
    />
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/shy.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Shy Datika</span>
                        <small className="h6 text-muted">
                         Co-Founder, CEO Voltency
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/alan.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Alen  Sibert</span>
                        <small className="h6 text-muted">
                          CEO, Voltency
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/maia.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Maia Naor </span>
                        <small className="h6 text-muted">
                         Cheif Product Officer
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/paz.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Paz Diamant</span>
                        <small className="h6 text-muted">Cheif Blockchain Trading Officer</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/tom.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Tom Lewis</span>
                        <small className="h6 text-muted">CEO, Voltency securities</small>
                      </h5>
                     
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
         
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">REQUEST FREE ASSISTANCE</h2>
                  <p className="lead text-white">
                  The customer demand for new options related to cryptocurrency and 
                  digital assets is only going to get bigger. Get in touch to see how a risk-based 
                  approach can connect the processes and programs you need to handle new opportunities.
                  </p>
                </Col>
              </Row>
              
            </Container>
<AdSense.Google
      client='ca-pub-4198852474010352'
      slot = '9700430239'
    
    />
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Are you in need of support?</h4>
                      <p className="mt-0">
                      We're here to listen to your needs.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
        
              </Row>
            </Container>

          </section>
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
