"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import styles from './FaqsCompany.module.css';

const FaqsCompany: React.FC = () => {
  return (
    <section className={styles.FaqsCompany} id="FAQs">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div className={styles.supplyHeadFaq}>
              <h2>Frequently Asked Questions regarding ABCD Private Limited</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className={styles.faqsQuestions}>
              <Accordion>
                <Container>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Which are the top suppliers of ABCD Private Limited?</Accordion.Header>
                    <Accordion.Body>
                      ABCD Private Limited's top suppliers are Company1, Company2, Company3, Company4, Company5.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Which are the top buyers of ABCD Private Limited?</Accordion.Header>
                    <Accordion.Body>
                      ABCD Private Limited's top buyers Company1, Company2, Company3, Company4, Company5.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>What are the total imports by month of ABCD Private Limited?</Accordion.Header>
                    <Accordion.Body>
                      ABCD Private Limited's total imports by months are Jan 20%, Feb 30%, March 45%, and more.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>What are the total exports by month of ABCD Private Limited?</Accordion.Header>
                    <Accordion.Body>
                      ABCD Private Limited's total exports by months are Jan 20%, Feb 30%, March 45%, and more.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Which are the top 10 countries from where ABCD Private Limited imports goods?</Accordion.Header>
                    <Accordion.Body>
                      COUNTRY1 was the biggest supplier of goods to ABCD Private Limited. Other major countries were Country2, Country3, Country4, Country5, Country6, Country7, Country8, Country9, Country10.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>Which are the top 10 countries to where ABCD Private Limited exports goods?</Accordion.Header>
                    <Accordion.Body>
                      COUNTRY1 was the biggest buyer of goods from ABCD Private Limited. Other major countries were Country2, Country3, Country4, Country5, Country6, Country7, Country8, Country9, Country10.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>What is the import turnover of ABCD Private Limited?</Accordion.Header>
                    <Accordion.Body>
                      ABCD Private Limited imported goods worth (VALUE) in (CURRENT YEAR). In (PREVIOUS YEAR), imports of ABCD Private Limited totaled (VALUE).
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header>What is the export turnover of ABCD Private Limited?</Accordion.Header>
                    <Accordion.Body>
                      ABCD Private Limited exported goods worth (VALUE) in (CURRENT YEAR). In (PREVIOUS YEAR), exports of ABCD Private Limited totaled (VALUE).
                    </Accordion.Body>
                  </Accordion.Item>
                </Container>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqsCompany;
