import { Container, Row, Col } from "react-bootstrap";
import aosleft from "../components/images/aosleft.png";
import responsive from "../components/images/Responsive.png"

const divStyles = {
  boxShadow: "2px 2px 100px #950101",
  margin: "1em",
  padding: "1em",
};

function About() {
  return (
    <Container className="About mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={12}>
          <div className="row align-items-md-stretch" style={divStyles}>
            <div class="p-5 mb-4 rounded-3">
              <div className="Text p-5 text-white bg-dark rounded-3">
                <h1>About The Project</h1>
                <br />
                <ul>
                  <li>This Project was done using react</li>
                  <li>This Project is Useful for Designers and Design Team</li>
                  <li>
                    This project returns a high quality image without any
                    WaterMark And the image can be downlaoded in full quality
                  </li>
                  <li>Its User Friendly</li>
                  <li>Its Mobile Responsive</li>
                  <li>
                    made with the help of unsplash API which has a extensive
                    image library
                  </li>
                  <li>Gallery Updated Everyday!</li>
                  <li>
                    Here You Can Find Its{" "}
                    <a
                      href="https://github.com/Adam-Dhayfa/Images-Gallery"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source Code
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="Mid-Section">
            <div className="imgOneText">
              An Simple yet Complex Image Gallery With React
            </div>
            <div data-aos="fade-left" className="img-one">
              <img
                src={aosleft}
                style={{ width: "650px", height: "400px" }}
                alt="ScreenShot"
              ></img>
            </div>
          </div>
        </Col>
        <div className="Sec-Section">
          <div data-aos="fade-right" className="img-two">
              <img
                src={responsive}
                style={{ width: "200px", height: "400px" }}
                alt="ScreenShot"
              ></img>
              </div>
          <div className="imgTwoText">Its Responsive! Which Means it can adapt to different screen sizes</div>
        </div>
      </Row>
    </Container>
  );
}

export default About;
