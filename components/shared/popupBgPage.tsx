import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import styles from "./PopupBgPage.module.css";
import { Col, Row } from "react-bootstrap";


const PopupBg = () => {

  return (
    <section className={styles.PopupBg} >
        <Container>
          <Row >
            <Col md={12} lg={12}>
                <div className={styles.overheadPup}>
                    <img src="../../lockdata.png"></img>
                    <p>This information is available in the Market Inside Platform. To explore ABCD Private Limited‘s full profile</p>
                    <button className={styles.butndemo} >Schedule a Demo</button>
                </div>
            </Col>
            
          </Row>
           
        </Container>
      </section>
  );
};

export default PopupBg;
