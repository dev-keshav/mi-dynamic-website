import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import styles from "./OverViewHead.module.css";
import { Col, Row } from "react-bootstrap";


const OverView = () => {

  return (
    <section className={styles.OverViewHead} >
        <Container>
          <Row >
            <Col md={12} lg={12}>
                <div className={styles.top} id="top">
                    <a href="#CmpnOverview">Overview</a> |
                    <a href="#totalImports">Import &amp; Export Turnover</a> |
                    <a href="#TradeCountry">Countries</a> |
                    <a href="#commoditeies">Commodities</a> |
                    <a href="#suppilers">Supply Chain</a> |
                    <a href="#portses">Ports</a> |
                    <a href="#Competitors">Competitors</a> |
                    <a href="#ShipemntRecords">Shipment Records</a> |
                    <a href="#CompnyContcts">Company Contacts</a> |
                    <a href="#FAQs">FAQs</a>
                </div>
            </Col>
            
          </Row>
           
        </Container>
      </section>
  );
};

export default OverView;
