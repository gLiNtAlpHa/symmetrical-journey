
import React from "react";

// reactstrap components
import {
  Button,
  
  
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
         
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">
                You can also join our fast growing communities
                </h3>
                
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="/"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>

                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="/"
                  id="tooltip475038076"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-telegram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038076">
                  Join Our Channel
                </UncontrolledTooltip>
                
                
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="/"
                    target="_blank"
                  >
                   Voltency
                  </a>
                  
                  .
                </div>
              </Col>
              
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
