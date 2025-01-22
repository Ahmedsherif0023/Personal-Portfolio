import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import Logo from "../assets/img/Logo.png"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={Logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ahmedsheriif/"  target="_blank"><img src={navIcon1} alt="Linkedin acc" /></a>
              <a href="https://www.facebook.com/ahmedsherifoo23/" target="_blank"><img src={navIcon2} alt="Facebook acc" /></a>
              <a href="https://www.instagram.com/ishefo0" target="_blank"><img src={navIcon3} alt="Instagram acc" /></a>
            </div>
            <p className="zzx">Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
