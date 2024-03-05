"use client"

import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react"
import CanvasJSReact from "@canvasjs/react-charts"
import { Col, Row } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"

import styles from "./ImporterExTurnover.module.css"

var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

const options = {
  animationEnabled: true,
  exportEnabled: true,
  theme: "light2",
  title: {
    text: "Import Value (USD %)",
    fontSize: 16,
    fontColor: "#000",
    margin: 40,
  },
  data: [
    {
      type: "doughnut",
      startAngle: 60,
      indexLabelFontSize: 14,
      indexLabelFontColor: "#fd9852",
      toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
      indexLabel: "{label} ({percentage}%)",
      dataPoints: [
        { y: 1400, label: "Agra ICD" },
        { y: 1212, label: "Ahemdabad Air" },
        { y: 1080, label: "Ahemdabad ICD" },
        { y: 665, label: "Amritsar ACC" },
        { y: 878, label: "Amritsar ACC" },
        // { y: 540, label: "Ankaleshwar ICD" },
        //  { y: 649, label: "Ballabgarh ICD" },
        // { y: 549, label: "Bangalore Air" },
        // { y: 449, label: "Bangalore ICD" },
        // { y: 539, label: "Bhusawal ICD" }
      ],
    },
  ],
}
const optionsSecond = {
  animationEnabled: true,
  exportEnabled: true,
  theme: "light2",
  title: {
    text: "Export Value (USD %)",
    fontSize: 16,
    fontColor: "#000",
    margin: 40,
  },
  data: [
    {
      type: "doughnut",
      startAngle: 60,
      indexLabelFontSize: 14,
      indexLabelFontColor: "#fd9852",
      toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
      indexLabel: "{label} ({percentage}%)",
      dataPoints: [
        { y: 1400, label: "Agra ICD" },
        { y: 1212, label: "Ahemdabad Air" },
        { y: 1080, label: "Ahemdabad ICD" },
        { y: 665, label: "Amritsar ACC" },
        { y: 878, label: "Amritsar ACC" },
        // { y: 540, label: "Ankaleshwar ICD" },
        //  { y: 649, label: "Ballabgarh ICD" },
        //{ y: 549, label: "Bangalore Air" },
        //{ y: 449, label: "Bangalore ICD" },
        // { y: 539, label: "Bhusawal ICD" }
      ],
    },
  ],
}

const PortofLoading = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber)
  }

  return (
    <section className={styles.PortofLoading} id="portses">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div className={styles.turnoverTbs}>
              <div className={styles.tabbuttons}>
                <button
                  onClick={() => handleTabClick(1)}
                  className={activeTab === 1 ? "active" : ""}
                >
                  Port of Unloading
                </button>
                <button
                  onClick={() => handleTabClick(2)}
                  className={activeTab === 2 ? "active" : ""}
                >
                  Port of Loading
                </button>
              </div>

              <div className={styles.tabcontent}>
                {activeTab === 1 && (
                  <Row>
                    <Col md={12} lg={12}>
                      <div className={styles.supplyHead}>
                        <h2>
                          ABCD Private Limited uploaded goods from which ports?
                        </h2>
                        <p>
                          ABCD Private Limited unloading ports are Agra ICD,
                          Ahmedabad Air, Ahmedabad ICD and more
                        </p>
                      </div>
                    </Col>
                    <Col md={6} lg={6}>
                      <div className={styles.topImpTble}>
                        <Table size="sm" className={styles.ImpExpTable}>
                          <thead>
                            <tr>
                              <th>Ports of Discharging</th>
                              <th>Import Value (USD %)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Agra ICD</td>
                              <td>25%</td>
                            </tr>
                            <tr>
                              <td>Ahemdabad Air</td>
                              <td>35%</td>
                            </tr>
                            <tr>
                              <td>Ahemdabad ICD</td>
                              <td>20%</td>
                            </tr>
                            <tr className={styles.blur}>
                              <td>Amritsar ACC</td>
                              <td>40%</td>
                            </tr>
                            <tr className={styles.blur}>
                              <td>Ankaleshwar ICD</td>
                              <td>35%</td>
                            </tr>
                            <tr className={styles.blur}>
                              <td>Ballabgarh ICD</td>
                              <td>45%</td>
                            </tr>
                            <tr className={styles.blur}>
                              <td>Bangalore Air</td>
                              <td>45%</td>
                            </tr>
                            <tr className={styles.blur}>
                              <td>Bangalore ICD</td>
                              <td>25%</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Col>

                    <Col md={6} lg={6}>
                      <div className={styles.CnavGrph}>
                        <CanvasJSChart options={options} />
                        <div className={styles.mapGrhide}>
                          <div className={styles.MainLockdata}>
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
                      </div>
                    </Col>
                  </Row>
                )}
                {activeTab === 2 && (
                  <Row>
                    <Col md={12} lg={12}>
                      <div className={styles.supplyHead}>
                        <h2>
                          ABCD Private Limited loaded goods through which ports?
                        </h2>
                        <p>
                          ABCD Private Limited loading ports are Agra ICD,
                          Ahmedabad Air, Ahmedabad ICD and more
                        </p>
                      </div>
                    </Col>
                    <Col md={6} lg={6}>
                      <div className={styles.topImpTble}>
                        <Table size="sm" className={styles.ImpExpTable}>
                          <thead>
                            <tr>
                              <th>Ports of Discharging</th>
                              <th>Export Value (USD %)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Agra ICD</td>
                              <td>25%</td>
                            </tr>
                            <tr>
                              <td>Ahemdabad Air</td>
                              <td>35%</td>
                            </tr>
                            <tr>
                              <td>Ahemdabad ICD</td>
                              <td>20%</td>
                            </tr>
                            <tr className={styles.blur}>
                              <td>Amritsar ACC</td>
                              <td>40%</td>
                            </tr>
                            <tr className={styles.blur}>
                              <td>Ankaleshwar ICD</td>
                              <td>35%</td>
                            </tr>
                            <tr className={styles.blur}>
                              <td>Ballabgarh ICD</td>
                              <td>45%</td>
                            </tr>
                            <tr className={styles.blur}>
                              <td>Bangalore Air</td>
                              <td>45%</td>
                            </tr>
                            <tr className={styles.blur}>
                              <td>Bangalore ICD</td>
                              <td>25%</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Col>

                    <Col md={6} lg={6}>
                      <div className={styles.CnavGrph}>
                        <CanvasJSChart options={optionsSecond} />
                        <div className={styles.mapGrhide}>
                          <div className={styles.MainLockdata}>
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
  )
}

export default PortofLoading
