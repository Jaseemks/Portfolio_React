
import { Container, Row,Col } from "react-bootstrap";
import './Home.css';
import { Homemain } from "../components/Homemain";
import { Content } from "../components/Content";
import { Contact } from "../components/Contact";

function Home(){

    return(
        <> 
             <Container> 
              <Row>
              <Col className="home">
              <h2 className="name">
                JASEEM K S
              </h2>
              <Homemain/>
              </Col>
              <Col>
              <Content/>
              </Col>
              </Row>
              <Col className="cont">
              <Contact/>
              </Col>
           </Container> 
        </>   

    );
}    
export default Home;
