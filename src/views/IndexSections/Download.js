


import React from "react";

// reactstrap components

import {  Container, Row, Col } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container className= "pt-lg pb-300">
          
            <Row className="row-grid mt-5">
              
                <div className="text-center" lg="8">
                  <h2 className="display-3 mb-5 mt-5">
                    Why Choose US
                  </h2>
                  <Row className="justify-content-center">
                    <Col lg="4" sm="6"  >
                      <a
                        href="/"
                        
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/theme/icon14.png")}
                      
              
                        />
                        <p className="display-5 text-default  font-weight-bold mb-6 mt-5">
                        RESPONSIVE TRADING SUPPORT
                  </p>
                      </a>
                      
                    </Col>
                    <Col lg="4" sm="6">
                      <a
                        href="/"
                      
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/theme/icon16.png")}
                        />
                         <p className="display-5 text-default font-weight-bold mb-6 mt-5">
                             FASTER SETTLEMENT  
                  </p>
                        
                      </a>
                     
                    </Col>
                    <Col lg="4" sm="6">
                      <a
                        href="/"
                        
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/theme/icon3_.png")}
                        />
                         <p className="display-5 text-default  font-weight-bold mb-6 mt-5">
                   SAFE AND SECURE
                  </p>
                      </a>
                     
                    </Col>
                    
                    <Col  lg="4" sm="6" >
                      <a
                        href="/"
                        
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/theme/icon4_.png")}
                        />
                         <p className="display-5 text-default  font-weight-bold mb-6 mt-5">
                    BETTER THAN CASH
                  </p>
                      </a>
                      
                    </Col>
                    
                    <Col lg="4" sm="6" className="margin-down-1" >
                      <a
                        href="/"
                       
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/theme/icon5_.png")}
                        />
                         <p className="display-5 text-default  font-weight-bold mb-6 mt-5">
                         INSTANT EXCHANGE
                  </p>
                      </a>
                      
                    </Col>
                    <Col lg="4" sm="6">
                      <a
                        href="/"
                       
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/theme/icon15.png")}
                        />
                         <p className="display-5 text-default font-weight-bold mb-6 mt-5">
                         RELIABLE VOLUME
                  </p>
                      </a>
                     
                    </Col>
                    
                  </Row>
                </div>
              
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
