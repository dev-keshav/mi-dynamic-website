"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import styles from "./CompetitorsImpExp.module.css";
import { Col, Row } from "react-bootstrap";
import React, { useState } from 'react';


const CompetitorsImpExp = () => {

    const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <section className={styles.CompetitorsImpExp} id="Competitors">
        <Container>
          <Row >
            <Col md={12} lg={12}>
            <div className={styles.turnoverTbs} >
                <div className={styles.tabbuttons} >
                    <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
                    Import Competitors 
                    </button>
                    <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
                    Export Competitors 
                    </button>
                  
                </div>

                <div className={styles.tabcontent} >
                    {activeTab === 1 && 
                    <Row>
                        <Col md={12} lg={12}>
                        <div className={styles.supplyHead}>
                            <h2>Top Import Competitors of ABCD Private Limited</h2>
                        </div>
                        </Col>
                        <Col md={8} lg={8} >
                            <Col md={6} className={ `${styles.boxitem} blur`}>
                                <Row>
                                    <h4 className="col-md-12" >Exxon Mobil Corporation</h4>
                                    <p className="col-md-6" >Import Turnover:  <br /> <b>154 Million</b> </p>
                                    <p className="col-md-6" >No. of Employees:  <br /> <b>201-500</b> </p>
                                </Row>
                            </Col>
                            <Col md={6} className={`${styles.boxitem} ${styles.blur}`}>
                                <Row>
                                    <h4 className="col-md-12" >Exxon Mobil Corporation</h4>
                                    <p className="col-md-6" >Import Turnover:  <br /> <b>154 Million</b> </p>
                                    <p className="col-md-6" >No. of Employees:  <br /> <b>201-500</b> </p>
                                </Row>
                            </Col>
                            <Col md={6} className={`${styles.boxitem} ${styles.blur}`} >
                                <Row>
                                    <h4 className="col-md-12" >Exxon Mobil Corporation</h4>
                                    <p className="col-md-6" >Import Turnover:  <br /> <b>154 Million</b> </p>
                                    <p className="col-md-6" >No. of Employees:  <br /> <b>201-500</b> </p>
                                </Row>
                            </Col>
                            <Col md={6} className={`${styles.boxitem} ${styles.blur}`}>
                                <Row>
                                    <h4 className="col-md-12" >Exxon Mobil Corporation</h4>
                                    <p className="col-md-6" >Import Turnover:  <br /> <b>154 Million</b> </p>
                                    <p className="col-md-6" >No. of Employees:  <br /> <b>201-500</b> </p>
                                </Row>
                            </Col>
                        </Col>

                        <Col md={4}>
                            <div className={`${styles.wntcmptr} ${styles.popbx}`}>
                                <Row>
                                    <h3 className="col-md-12">Want to know your competitors?</h3>
                                    <h5 className="col-md-12">Get detailed trade data of 3M+ companies and monitor the trade activities of your competitors.</h5>
                                    <button className={styles.butndemo}>Schedule A Demo</button>
                                </Row>
                            </div>
                        </Col>
                    
                    </Row>
                    
                    }
                    {activeTab === 2 && 
                    <Row>
                            <Col md={12} lg={12}>
                            <div className={styles.supplyHead}>
                                <h2>Top Export Competitors of ABCD Private Limited</h2>
                                {/* <p>Top suppliers of ABCD Private Limited are XYZ, ACCD, AICD and more</p> */}
                            </div>
                            </Col>
                            
                            <Col md={8} lg={8} >
                            <Col md={6} className={ `${styles.boxitem} blur`}>
                                <Row>
                                    <h4 className="col-md-12" >Exxon Mobil Corporation</h4>
                                    <p className="col-md-6" >Export Turnover:  <br /> <b>154 Million</b> </p>
                                    <p className="col-md-6" >No. of Employees:  <br /> <b>201-500</b> </p>
                                </Row>
                            </Col>
                            <Col md={6} className={`${styles.boxitem} ${styles.blur}`}>
                                <Row>
                                    <h4 className="col-md-12" >Exxon Mobil Corporation</h4>
                                    <p className="col-md-6" >Import Turnover:  <br /> <b>154 Million</b> </p>
                                    <p className="col-md-6" >No. of Employees:  <br /> <b>201-500</b> </p>
                                </Row>
                            </Col>
                            <Col md={6} className={`${styles.boxitem} ${styles.blur}`} >
                                <Row>
                                    <h4 className="col-md-12" >Exxon Mobil Corporation</h4>
                                    <p className="col-md-6" >Import Turnover:  <br /> <b>154 Million</b> </p>
                                    <p className="col-md-6" >No. of Employees:  <br /> <b>201-500</b> </p>
                                </Row>
                            </Col>
                            <Col md={6} className={`${styles.boxitem} ${styles.blur}`}>
                                <Row>
                                    <h4 className="col-md-12" >Exxon Mobil Corporation</h4>
                                    <p className="col-md-6" >Import Turnover:  <br /> <b>154 Million</b> </p>
                                    <p className="col-md-6" >No. of Employees:  <br /> <b>201-500</b> </p>
                                </Row>
                            </Col>
                        </Col>

                        <Col md={4}>
                            <div className={`${styles.wntcmptr} ${styles.popbx}`}>
                                <Row>
                                    <h3 className="col-md-12">Want to know your competitors?</h3>
                                    <h5 className="col-md-12">Get detailed trade data of 3M+ companies and monitor the trade activities of your competitors.</h5>
                                    <button className={styles.butndemo}>Schedule A Demo</button>
                                </Row>
                            </div>
                        </Col>
                            
                        </Row>
                    }
                
                </div>
                </div>
            </Col>
          </Row>

          <Row >
            
          </Row>
           
        </Container>
      </section>
  );
};

export default CompetitorsImpExp;
