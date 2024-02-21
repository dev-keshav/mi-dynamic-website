"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import styles from "./CompetitorsImpExp.module.css";
import { Col, Row } from "react-bootstrap";
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

const ImpExpShipments = () => {

    const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <section className={styles.CompetitorsImpExp} id="ShipemntRecords">
        <Container>
          <Row >
            <Col md={12} lg={12}>
            <div className={styles.turnoverTbs} >
                <div className={styles.tabbuttons} >
                    <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
                    Import Shipment 
                    </button>
                    <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
                    Export Shipment 
                    </button>
                </div>

                <div className={styles.tabcontent} >
                    {activeTab === 1 && 
                    <Row>
                        <Col md={12} lg={12}>
                        <div className={styles.supplyHead}>
                            <h2>ABCD Private Limited's Import Shipments</h2>
                        </div>
                        </Col>

                        <Col md={12}>
                                <div className={styles.shimmntTble}>
                                <Table striped bordered variant="striped" className={styles.tablFullwidth}>
                                    <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>HS Code</th>
                                        <th>Product Description</th>
                                        <th>Importer Name</th>
                                        <th>Exporter Name</th>
                                        <th>Origin Country</th>
                                        <th>Quantity</th>
                                        <th>Unit</th>
                                        <th>Net Weight [Kg]</th>
                                        <th>Total Value [usd]</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">381121001000</td>
                                        <td width="28%" data-title="Product Description">
                                            R00301b 218 kg * other prepared additives for other liquid oils used for
                                            the same purpose, such as mineral oils
                                        </td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">France</td>
                                        <td data-title="Quantity">872</td>
                                        <td data-title="Unit">Kilogram</td>
                                        <td className={styles.blur} data-title="Net Weight [Kg]">872</td>
                                        <td className={styles.blur} data-title="Total Value [usd]">6174.34</td>
                                        </tr>
                                        <tr>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">848790900011</td>
                                        <td width="28%" data-title="Product Description">Oil seal</td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">Poland</td>
                                        <td className={styles.blur} data-title="Quantity">8880</td>
                                        <td data-title="Unit">Units</td>
                                        <td className={styles.blur} data-title="Net Weight [Kg]">97.68</td>
                                        <td data-title="Total Value [usd]">13132.92</td>
                                        </tr>
                                        <tr>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">391000000019</td>
                                        <td width="28%" data-title="Product Description">Silicone oils (solid)</td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">Germany</td>
                                        <td data-title="Quantity">1250</td>
                                        <td data-title="Unit">Kilogram</td>
                                        <td data-title="Net Weight [Kg]">1250</td>
                                        <td data-title="Total Value [usd]">13320.33</td>
                                        </tr>
                                        <tr className={styles.blur}>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">842123000000</td>
                                        <td width="28%" data-title="Product Description">Oil filter-wd 962/32</td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">Germany</td>
                                        <td data-title="Quantity">120</td>
                                        <td data-title="Unit">Units</td>
                                        <td data-title="Net Weight [Kg]">129.48</td>
                                        <td data-title="Total Value [usd]">2275.57</td>
                                        </tr>
                                        <tr className={styles.blur}>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">841950800000</td>
                                        <td width="28%" data-title="Product Description">Oil cooler</td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">France</td>
                                        <td data-title="Quantity">26</td>
                                        <td data-title="Unit">Units</td>
                                        <td data-title="Net Weight [Kg]">60</td>
                                        <td data-title="Total Value [usd]">1358.16</td>
                                        </tr>
                                        <tr className={styles.blur}>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">841229819000</td>
                                        <td width="28%" data-title="Product Description">Hydraulic oil motor</td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">Poland</td>
                                        <td data-title="Quantity">121</td>
                                        <td data-title="Unit">Units</td>
                                        <td data-title="Net Weight [Kg]">933.01</td>
                                        <td data-title="Total Value [usd]">18943.52</td>
                                        </tr>
                                        <tr className={styles.blur}>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">271019990025</td>
                                        <td width="28%" data-title="Product Description">Other lubrication oils</td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">France</td>
                                        <td data-title="Quantity">820</td>
                                        <td data-title="Unit">Liter</td>
                                        <td data-title="Net Weight [Kg]">820</td>
                                        <td data-title="Total Value [usd]">2564.84</td>
                                        </tr>
                                        <tr className={styles.blur}>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">270900900000</td>
                                        <td width="28%" data-title="Product Description">Crude oil</td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">Russia</td>
                                        <td data-title="Quantity">795017</td>
                                        <td data-title="Unit">Kilogram</td>
                                        <td data-title="Net Weight [Kg]">795017</td>
                                        <td data-title="Total Value [usd]">418764.53</td>
                                        </tr>
                                        <tr className={styles.blur}>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">330499009013</td>
                                        <td width="28%" data-title="Product Description">
                                            Face cream / eye cream / aloe multi-purpose skin gel / body care oil /
                                            anti-aging serum / serum / sun cream
                                        </td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">Italy</td>
                                        <td data-title="Quantity">2232</td>
                                        <td data-title="Unit">Units</td>
                                        <td data-title="Net Weight [Kg]">715.95</td>
                                        <td data-title="Total Value [usd]">7733.04</td>
                                        </tr>
                                        <tr className={styles.blur}>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">842123000000</td>
                                        <td width="28%" data-title="Product Description">Oil filter</td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">Germany</td>
                                        <td data-title="Quantity">224</td>
                                        <td data-title="Unit">Units</td>
                                        <td data-title="Net Weight [Kg]">243.48</td>
                                        <td data-title="Total Value [usd]">6979.97</td>
                                        </tr>
                                    </tbody>

                                    </Table>
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
                            </Col>
                       
                    </Row>
                    
                    }
                    {activeTab === 2 && 
                    <Row>
                            <Col md={12} lg={12}>
                            <div className={styles.supplyHead}>
                                <h2>ABCD Private Limited's Export Shipments</h2>
                                {/* <p>Top suppliers of ABCD Private Limited are XYZ, ACCD, AICD and more</p> */}
                            </div>
                            </Col>
                            <Col md={12}>
                                <div className={styles.shimmntTble}>
                                <Table striped bordered variant="striped" className={styles.tablFullwidth}>
                                    <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>HS Code</th>
                                        <th>Product Description</th>
                                        <th>Importer Name</th>
                                        <th>Exporter Name</th>
                                        <th>Origin Country</th>
                                        <th>Quantity</th>
                                        <th>Unit</th>
                                        <th>Net Weight [Kg]</th>
                                        <th>Total Value [usd]</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">381121001000</td>
                                        <td width="28%" data-title="Product Description">
                                            R00301b 218 kg * other prepared additives for other liquid oils used for
                                            the same purpose, such as mineral oils
                                        </td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">France</td>
                                        <td data-title="Quantity">872</td>
                                        <td data-title="Unit">Kilogram</td>
                                        <td className={styles.blur} data-title="Net Weight [Kg]">872</td>
                                        <td className={styles.blur} data-title="Total Value [usd]">6174.34</td>
                                        </tr>
                                        <tr>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">848790900011</td>
                                        <td width="28%" data-title="Product Description">Oil seal</td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">Poland</td>
                                        <td className={styles.blur} data-title="Quantity">8880</td>
                                        <td data-title="Unit">Units</td>
                                        <td className={styles.blur} data-title="Net Weight [Kg]">97.68</td>
                                        <td data-title="Total Value [usd]">13132.92</td>
                                        </tr>
                                        <tr>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">391000000019</td>
                                        <td width="28%" data-title="Product Description">Silicone oils (solid)</td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">Germany</td>
                                        <td data-title="Quantity">1250</td>
                                        <td data-title="Unit">Kilogram</td>
                                        <td data-title="Net Weight [Kg]">1250</td>
                                        <td data-title="Total Value [usd]">13320.33</td>
                                        </tr>
                                        <tr className={styles.blur}>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">842123000000</td>
                                        <td width="28%" data-title="Product Description">Oil filter-wd 962/32</td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">Germany</td>
                                        <td data-title="Quantity">120</td>
                                        <td data-title="Unit">Units</td>
                                        <td data-title="Net Weight [Kg]">129.48</td>
                                        <td data-title="Total Value [usd]">2275.57</td>
                                        </tr>
                                        <tr className={styles.blur}>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">841950800000</td>
                                        <td width="28%" data-title="Product Description">Oil cooler</td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">France</td>
                                        <td data-title="Quantity">26</td>
                                        <td data-title="Unit">Units</td>
                                        <td data-title="Net Weight [Kg]">60</td>
                                        <td data-title="Total Value [usd]">1358.16</td>
                                        </tr>
                                        <tr className={styles.blur}>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">841229819000</td>
                                        <td width="28%" data-title="Product Description">Hydraulic oil motor</td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">Poland</td>
                                        <td data-title="Quantity">121</td>
                                        <td data-title="Unit">Units</td>
                                        <td data-title="Net Weight [Kg]">933.01</td>
                                        <td data-title="Total Value [usd]">18943.52</td>
                                        </tr>
                                        <tr className={styles.blur}>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">271019990025</td>
                                        <td width="28%" data-title="Product Description">Other lubrication oils</td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">France</td>
                                        <td data-title="Quantity">820</td>
                                        <td data-title="Unit">Liter</td>
                                        <td data-title="Net Weight [Kg]">820</td>
                                        <td data-title="Total Value [usd]">2564.84</td>
                                        </tr>
                                        <tr className={styles.blur}>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">270900900000</td>
                                        <td width="28%" data-title="Product Description">Crude oil</td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">Russia</td>
                                        <td data-title="Quantity">795017</td>
                                        <td data-title="Unit">Kilogram</td>
                                        <td data-title="Net Weight [Kg]">795017</td>
                                        <td data-title="Total Value [usd]">418764.53</td>
                                        </tr>
                                        <tr className={styles.blur}>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">330499009013</td>
                                        <td width="28%" data-title="Product Description">
                                            Face cream / eye cream / aloe multi-purpose skin gel / body care oil /
                                            anti-aging serum / serum / sun cream
                                        </td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">Italy</td>
                                        <td data-title="Quantity">2232</td>
                                        <td data-title="Unit">Units</td>
                                        <td data-title="Net Weight [Kg]">715.95</td>
                                        <td data-title="Total Value [usd]">7733.04</td>
                                        </tr>
                                        <tr className={styles.blur}>
                                        <td data-title="Date">17/Feb/2020</td>
                                        <td data-title="HS Code">842123000000</td>
                                        <td width="28%" data-title="Product Description">Oil filter</td>
                                        <td data-title="Importer Name" class="numeric">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Exporter name">
                                            <span  variant="primary" onClick={() => setModalShow(true)}
                                            ><img src="../../lockdata.png"
                                            /></span>
                                        </td>
                                        <td data-title="Origin Country">Germany</td>
                                        <td data-title="Quantity">224</td>
                                        <td data-title="Unit">Units</td>
                                        <td data-title="Net Weight [Kg]">243.48</td>
                                        <td data-title="Total Value [usd]">6979.97</td>
                                        </tr>
                                    </tbody>

                                    </Table>

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

export default ImpExpShipments;
