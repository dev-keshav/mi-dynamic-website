import React from 'react';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import styles from './indiaImport.module.css';

function IndiaImport() {
  return (
    <div>
      
      <div className={styles.indiaImport_header}>
        <div className={styles.CompanyProfilePage}>
          <h2>Agra ICD Port Imports</h2>
          <p>Agra ICD Port (June 2019 to May 2020)</p>
        </div>
        <div className={styles.indiaImport_five_div}>
          <div>
            <p>Total Import Value</p>
            <h4>US$ 101 Million</h4>
          </div>
          <div>
            <p>Port Import Share</p>
            <h4>US$ 12.57 %</h4>
          </div>
          <div>
            <p>Total Shipment Arrived</p>
            <h4>3665546</h4>
          </div>
          <div>
            <p>No. of Indian Importers</p>
            <h4>55136</h4>
          </div>
          <div>
            <p>No. of US Suppliers</p>
            <h4>55136</h4>
          </div>
        </div>
        <div>
          <section className={styles.OverViewHead}>
            <Container>
              <Row>
                <Col md={12} lg={12}>
                  <div className={styles.top} id="top">
                    <a href="#CmpnOverview">India Imports</a> |
                    <a href="#totalImports">Import Partners</a> |
                    <a href="#TradeCountry">Importers & Foreign Suppliers</a> |
                    <a href="#commodities">Shipment Records</a> |
                    <a href="#suppliers">FAQs</a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
        <div className={styles.heading}>
          <h2>Major Import Commodities of Agra ICD Port in India</h2>
          <p>
            Which commodities arrived at Agra ICD Port of India between June
            2019 and May 2020? Analyze chapter-wise statistics of products which
            India imports through Agra ICD Port from June 2019 to May 2020.
          </p>
        </div>
        <div className={styles.icdport_div}>
          <div className={styles.icdport_heading}>
            <h1>India’s Agra ICD Port Imports</h1>
            <p>
              India import statistics of Agra ICD Port between June 2019 to May
              2020 are given in this chart. Get a clear picture of commodities
              chapter-wise which arrived at Agra ICD Port from June 2019 to May
              2020.
            </p>
          </div>
          <div className={styles.icdport_graph}>{/* Add your chart component here */}</div>
        </div>
      </div>
    </div>
  );
}

export default IndiaImport;
