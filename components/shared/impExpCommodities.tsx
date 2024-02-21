"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import styles from "./ImporterExTurnover.module.css";
import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import CanvasJSReact from "@canvasjs/react-charts";
import axios from "axios";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



const ImpExpCommodities = () => {
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
            company_code: "0305008111",
          },
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwNzk0OWNiLWZmODItNGVkOS1hNzZhLWMxOGRmOThiZDZkYyIsImlhdCI6MTcwNDU0OTU4MH0.sMR6ZZ52KNkiXG8V-Y6JxjkscCOOEDY7DPEFc5nMU88",
              "Content-Type": "application/json",
            },
            redirect: "follow",
          }
        );
        var res = response.data;
        setRes(res); // Update the state with the fetched data
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataNew = async () => {
      try {
        const response = await axios.post(
          "https://api-dp.ibnmarkit.com:443/api/v1/users/company-commodities",
          {
            from: "2022-01-01",
            to: "2022-12-31",
            country_code: "IN",
            company_code: "0305008111",
          },
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwNzk0OWNiLWZmODItNGVkOS1hNzZhLWMxOGRmOThiZDZkYyIsImlhdCI6MTcwNDU0OTU4MH0.sMR6ZZ52KNkiXG8V-Y6JxjkscCOOEDY7DPEFc5nMU88",
              "Content-Type": "application/json",
            },
            redirect: "follow",
          }
        );
        var importData = response.data.imports;
        setRess(importData);
        var exportData = response.data.exports;
        setResex(exportData);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching company turnover:", error);
      }
    };

    fetchDataNew();
  }, []);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };




  const mapChartData = (data) => {
    return data?.map((item, index) => ({
      label: item.commodity,
      y: parseFloat(item.percentage),
    }));
  };




  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Import Value (USD %)",
      fontColor: "#000",
      margin: 50,
      fontSize: 17,
    },
    axisY: {
      suffix: "$",
      gridColor: "#fd9852",
      color: "#fd9852",
      lineColor: "#fd9852",
      labelFontColor: "#fd9852",
      includeZero: false,
    },
    axisX: {
      title: "",
      gridColor: "#fd9852",
      color: "#fd9852",
      lineColor: "#fd9852",
      titleFontColor: "#000",
      labelFontColor: "#fd9852",
    },
    data: [
      // {
      //   type: "column",
      //   yValueFormatString: '#,##0.0#"%"',
      //   dataPoints: [
      //     { label: "Asses", y: 7.1 },
      //     { label: "Meat", y: 6.7 },
      //     { label: "Horses", y: 5.0 },
      //     { label: "Asses", y: 2.5 },
      //     { label: "Meat", y: 2.3 },
      //   ],
      // },
  
      {
        type: "column",
        yValueFormatString: '#,##0.0#"%"',
        dataPoints: mapChartData(ress),
      },
    ],
  };
  const optionsSecond = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Export Value (USD %)",
      fontColor: "#000",
      margin: 50,
      fontSize: 17,
    },
    axisY: {
      suffix: "$",
      gridColor: "#fd9852",
      color: "#fd9852",
      lineColor: "#fd9852",
      labelFontColor: "#fd9852",
      includeZero: false,
    },
    axisX: {
      title: "",
      gridColor: "#fd9852",
      color: "#fd9852",
      lineColor: "#fd9852",
      titleFontColor: "#000",
      labelFontColor: "#fd9852",
    },
    data: [
      // {
      //   type: "column",
      //   yValueFormatString: '#,##0.0#"%"',
      //   dataPoints: [
      //     { label: "Asses", y: 7.1 },
      //     { label: "Meat", y: 6.7 },
      //     { label: "Horses", y: 5.0 },
      //     { label: "Asses", y: 2.5 },
      //     { label: "Meat", y: 2.3 },
      //   ],
      // },
  
      {
        type: "column",
        yValueFormatString: '#,##0.0#"%"',
        dataPoints: mapChartData(resex),
      },
    ],
  };


  return (
    <section className={styles.ImpExpCommodities} id="commoditeies">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div className={styles.turnoverTbs}>
              <div className={styles.tabbuttons}>
                <button
                  onClick={() => handleTabClick(1)}
                  className={activeTab === 1 ? "active" : ""}
                >
                  Import Commodities
                </button>
                <button
                  onClick={() => handleTabClick(2)}
                  className={activeTab === 2 ? "active" : ""}
                >
                  Export Commodities
                </button>
              </div>

              <div className={styles.tabcontent}>
                {activeTab === 1 && (
                  <Row>
                    <Col md={12} lg={12}>
                      <div className={styles.supplyHead}>
                        {res && (
                          <h2>Which commodities {res.company_name} imports?</h2>
                        )}
                        {res && (
                          <p>
                            {res.company_name} import commodities are 010120 --
                            Asses, mules and hinnies; live 35%, 020430 -- Meat;
                            of sheep, lamb carcasses 20%,
                          </p>
                        )}
                      </div>
                    </Col>
                    <Col md={6} lg={6}>
                      <div className={styles.topImpTble}>
                        <Table size="sm" className={styles.ImpExpTable}>
                          <thead>
                            <tr>
                              <th>Commodity </th>
                              <th>Import Value (USD %)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ress?.map((item, index) => (
                              <React.Fragment key={index}>
                                {index <= 3 ? (
                                  <tr key={index}>
                                    <td>{item.commodity}</td>
                                    <td>{item.percentage}</td>
                                  </tr>
                                ) : (
                                  <tr key={index} className={styles.blur}>
                                    <td>{item.commodity}</td>
                                    <td>{item.percentage}</td>
                                  </tr>
                                )}
                              </React.Fragment>
                            ))}
                          </tbody>
                        </Table>
                        <div className={styles.lockTble}>
                          <div className={styles.lockImgdta}>
                            <img src="../../lockdata.png" />
                          </div>
                          <div className={styles.lockImgdta}>
                            <p>
                              Subscribe today to Market Inside pro and access
                              the latest data
                            </p>
                            <button className={styles.butndemo}>
                              Schedule A Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col md={6} lg={6}>
                      <div className="CnavGrph">
                        <CanvasJSChart options={options} />
                      </div>
                    </Col>
                  </Row>
                )}
                {activeTab === 2 && (
                  <Row>
                    <Col md={12} lg={12}>
                      <div className={styles.supplyHead}>
                        {res && (
                          <h2>Which commodities {res.company_name} exports?</h2>
                        )}
                        {res && (
                          <p>
                            {res.company_name} export commodities are 010120 --
                            Asses, mules and hinnies; live 35%, 020430 -- Meat;
                            of sheep, lamb carcasses 20%,
                          </p>
                        )}
                      </div>
                    </Col>
                    <Col md={6} lg={6}>
                      <div className={styles.topImpTble}>
                        <Table size="sm" className={styles.ImpExpTable}>
                          <thead>
                            <tr>
                              <th>Commodity </th>
                              <th>Import Value (USD %)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {resex?.map((item, index) => (
                              <React.Fragment key={index}>
                                {index <= 3 ? (
                                  <tr key={index}>
                                    <td>{item.commodity}</td>
                                    <td>{item.percentage}</td>
                                  </tr>
                                ) : (
                                  <tr key={index} className={styles.blur}>
                                    <td>{item.commodity}</td>
                                    <td>{item.percentage}</td>
                                  </tr>
                                )}
                              </React.Fragment>
                            ))}
                          </tbody>
                        </Table>
                        <div className={styles.lockTble}>
                          <div className={styles.lockImgdta}>
                            <img src="../../lockdata.png" />
                          </div>
                          <div className={styles.lockImgdta}>
                            <p>
                              Subscribe today to Market Inside pro and access
                              the latest data
                            </p>
                            <button className={styles.butndemo}>
                              Schedule A Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col md={6} lg={6}>
                      <div className="CnavGrph">
                        <CanvasJSChart options={optionsSecond} />
                      </div>
                    </Col>
                  </Row>
                )}
              </div>
            </div>
          </Col>
        </Row>

        <Row></Row>
      </Container>
    </section>
  );
};

export default ImpExpCommodities;
