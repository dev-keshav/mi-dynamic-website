"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import styles from "./ImporterExTurnover.module.css";
import { Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import CanvasJSReact from "@canvasjs/react-charts";
import React, { useEffect, useState } from "react";
import axios from "axios";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ImpExpTurnover = () => {
  const [res, setRes] = useState(null);
  const [ress, setRess] = useState(null);
  const [resex, setResex] = useState(null);

  // Helper function to get the numerical month from its abbreviation
  const getMonthNumber = (monthAbbreviation) => {
    const monthsMap = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12,
    };
    return monthsMap[monthAbbreviation];
  };

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
        setRes(res);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching company overview:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataNew = async () => {
      try {
        const response = await axios.post(
          "https://api-dp.ibnmarkit.com:443/api/v1/users/company-turnover",
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
        console.log("This is the import data: ", importData);
        var exportData = response.data.exports;
        setResex(exportData);
        console.log("This is the export data: ", exportData);
      } catch (error) {
        console.error("Error fetching company turnover:", error);
      }
    };

    fetchDataNew();
  }, []);

  const importsData = ress?.map((item) => ({
    x: new Date(
      item.month.split(" ")[1],
      getMonthNumber(item.month.split(" ")[0]) - 1,
      1
    ),
    y: parseFloat(item.percentage), // Parsing the percentage as a float
    markerType: "triangle",
    markerColor: "#6B8E23",
  }));

  const exportsData = resex?.map((item) => ({
    x: new Date(
      item.month.split(" ")[1],
      getMonthNumber(item.month.split(" ")[0]) - 1,
      1
    ),
    y: parseFloat(item.percentage), // Parsing the percentage as a float
    markerType: "triangle",
    markerColor: "tomato",
  }));

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: activeTab === 1 ? "Import Value in USD %" : "Export Value in USD %",
      color: "#fd9852",
      fontColor: "#555",
      margin: 50,
      fontSize: 17,
    },
    axisX: {
      interval: 1,
      title: "",
      intervalType: "month",
      valueFormatString: "MMM YYYY",
      gridColor: "#fd9852",
      titleFontColor: "#000",
      titleFontSize: 14,
      color: "#fd9852",
      lineColor: "#fd9852",
      labelFontColor: "#fd9852",
    },
    axisY: {
      suffix: "%",
      gridColor: "#fd9852",
      color: "#fd9852",
      lineColor: "#fd9852",
      labelFontColor: "#fd9852",
    },
    data: [
      {
        type: "line",
        markerSize: 12,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#%",
        dataPoints: activeTab === 1 ? importsData : exportsData,
      },
    ],
  };

  const optionsSecond = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title: {
      text: "Export Value in USD %",
      color: "#fd9852",
      fontColor: "#555",
      margin: 50,
      fontSize: 17,
    },
    axisX: {
      interval: 1,
      title: "",
      intervalType: "month",
      valueFormatString: "MMM",
      gridColor: "#fd9852",
      titleFontColor: "#000",
      titleFontSize: 14,
      color: "#fd9852",
      lineColor: "#fd9852",
      labelFontColor: "#fd9852",
    },
    axisY: {
      suffix: "%",
      gridColor: "#fd9852",
      color: "#fd9852",
      lineColor: "#fd9852",
      labelFontColor: "#fd9852",
    },

    data: [
      {
        type: "line",
        markerSize: 12,
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "#%",
        dataPoints: activeTab === 1 ? importsData : exportsData,
      },
    ],
  };

  return (
    <section className={styles.ImpExpTurnover} id="totalImports">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div className={styles.turnoverTbs}>
              <div className={styles.tabbuttons}>
                <button
                  onClick={() => handleTabClick(1)}
                  className={activeTab === 1 ? "active" : ""}
                >
                  Import Turnover
                </button>
                <button
                  onClick={() => handleTabClick(2)}
                  className={activeTab === 2 ? "active" : ""}
                >
                  Export Turnover
                </button>
              </div>

              <div className={styles.tabcontent}>
                {activeTab === 1 && (
                  <Row>
                    <Col md={12} lg={12}>
                      <div className={styles.supplyHead}>
                        {res && (
                          <h2> {res.company_name} - Total Imports by Month</h2>
                        )}
                        {res && (
                          <p>
                            View {res.company_name} imports turnover by month
                          </p>
                        )}
                      </div>
                    </Col>
                    <Col md={5} lg={5}>
                      <div className={styles.topImpTble}>
                        <Table size="sm" className={styles.ImpExpTable}>
                          <thead>
                            <tr>
                              <th>Month </th>
                              <th>Import Value (USD %)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ress?.map((item, index) => (
                              <React.Fragment key={index}>
                                {index <= 3 ? (
                                  <tr key={index}>
                                    <td>{item.month}</td>
                                    <td>{item.percentage}</td>
                                  </tr>
                                ) : (
                                  <tr key={index} className={styles.blur}>
                                    <td>{item.month}</td>
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

                    <Col md={7} lg={7}>
                      <div className="CnavGrph">
                        <CanvasJSChart options={options} />
                        {/* <DynamicCanvasJSChart /> */}
                      </div>
                    </Col>
                  </Row>
                )}
                {activeTab === 2 && (
                  <Row>
                    <Col md={12} lg={12}>
                      <div className={styles.supplyHead}>
                        {res && (
                          <h2> {res.company_name} - Total Exports by Month</h2>
                        )}
                        {res && (
                          <p>
                            View {res.company_name} exports turnover by month
                          </p>
                        )}
                      </div>
                    </Col>
                    <Col md={5} lg={5}>
                      <div className={styles.topImpTble}>
                        <Table size="sm" className={styles.ImpExpTable}>
                          <thead>
                            <tr>
                              <th>Month </th>
                              <th>Export Value (USD %)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {resex?.map((item, index) => (
                              <React.Fragment key={index}>
                                {index <= 3 ? (
                                  <tr key={index}>
                                    <td>{item.month}</td>
                                    <td>{item.percentage}</td>
                                  </tr>
                                ) : (
                                  <tr key={index} className={styles.blur}>
                                    <td>{item.month}</td>
                                    <td>{item.percentage}</td>
                                  </tr>
                                )}
                              </React.Fragment>
                            ))}
                          </tbody>
                        </Table>
                        <div className={styles.lockTble}>
                          <div className={styles.lockImgdta}>
                            <img src="/images/lockdata.png" />
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

                    <Col md={7} lg={7}>
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

export default ImpExpTurnover;
