"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import styles from "./ImporterExTurnover.module.css";
import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BuyerSupplyer = () => {

    const [res, setRes] = useState(null);
  const [ress, setRess] = useState(null);
  const [resex, setResex] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post(
              "https://api-dp.ibnmarkit.com/api/v1/users/company-overview",
              {
                from: "2022-01-01",
                to: "2022-12-31",
                country_code: "IN",
                company_code: "0305008111"
              },
              {
                headers: {
                  Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwNzk0OWNiLWZmODItNGVkOS1hNzZhLWMxOGRmOThiZDZkYyIsImlhdCI6MTcwNDU0OTU4MH0.sMR6ZZ52KNkiXG8V-Y6JxjkscCOOEDY7DPEFc5nMU88",
                  "Content-Type": "application/json"
                },
                redirect: 'follow'
              }
            );
            var res = response.data;
            setRes(res);  // Update the state with the fetched data
            console.log(response.data);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
      }, []);


      
  useEffect(() => {
    const fetchDataNew = async () => {
      try {
        const response = await axios.post(
          "https://api-dp.ibnmarkit.com:443/api/v1/users/company-buyers-suppliers",
          {
            from: "2022-01-01",
            to: "2022-12-31",
            country_code: "IN",
            company_code: "0305008111"
          },
          {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwNzk0OWNiLWZmODItNGVkOS1hNzZhLWMxOGRmOThiZDZkYyIsImlhdCI6MTcwNDU0OTU4MH0.sMR6ZZ52KNkiXG8V-Y6JxjkscCOOEDY7DPEFc5nMU88",
              "Content-Type": "application/json"
            },
            redirect: 'follow'
          }
        );
        var ress = response.data.imports;
        setRess(ress);
        var resex = response.data.exports;
        setResex(resex);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching company turnover:', error);
      }
    };

    fetchDataNew();
  }, []);


    const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <section className={styles.BuyerSupplyer} id="suppilers">
        <Container>
          <Row >
            <Col md={12} lg={12}>
            <div className={styles.turnoverTbs} >
                <div className={styles.tabbuttons} >
                    <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
                         Buyers
                    </button>
                    <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
                         Supplyers
                    </button>
                  
                </div>

                <div className={styles.tabcontent} >
                    {activeTab === 1 && 
                    <Row>
                        <Col md={12} lg={12}>
                        <div className={styles.supplyHead}>
                        {res && <h2>Who are the top buyers of {res.company_name}?</h2>}
                            {res && <p>Top buyers of {res.company_name} are XYZ, ACCD, AICD and more</p>}
                        </div>
                        </Col>
                        <Col md={12} lg={12}>
                     
                            <div  className={styles.Hidevigedaa}>
                            <img src="../../treegraph.png" width="100%" />
                            <div className={styles.mapGrhide}>
                                <div className={styles.MainLockdata}>
                                    <div className={styles.lockImgdta}>
                                        <img src="../../lockdata.png" />
                                    </div>
                                    <div className={styles.lockImgdta}>
                                        <p>Subscribe today to Market Inside pro and access the latest data</p>
                                        <button className={styles.butndemo}>Schedule A Demo</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </Col>
                    
                    </Row>
                    
                    }
                    {activeTab === 2 && 
                    <Row>
                            <Col md={12} lg={12}>
                            <div className={styles.supplyHead}>
                            {res && <h2>Who are the top suppliers of {res.company_name}?</h2>}
                            {res &&<p>Top suppliers of {res.company_name} are XYZ, ACCD, AICD and more</p>}
                            </div>
                            </Col>
                            
                            <Col md={12} lg={12}>
                     
                                <div  className={styles.Hidevigedaa}>
                                <img src="../../treegraph.png" width="100%" />
                                <div className={styles.mapGrhide}>
                                    <div className={styles.MainLockdata}>
                                        <div className={styles.lockImgdta}>
                                            <img src="../../lockdata.png" />
                                        </div>
                                        <div className={styles.lockImgdta}>
                                            <p>Subscribe today to Market Inside pro and access the latest data</p>
                                            <button className={styles.butndemo}>Schedule A Demo</button>
                                        </div>
                                    </div>
                                </div>
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

export default BuyerSupplyer;
