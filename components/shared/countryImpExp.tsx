"use client"

import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { Col, Row } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"

import styles from "./ImporterExTurnover.module.css"

const CountryImpExp = () => {
  const [res, setRes] = useState(null)
  const [ress, setRess] = useState(null)
  const [resex, setResex] = useState(null)

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
        )
        var res = response.data
        setRes(res) // Update the state with the fetched data
        console.log(response.data)
      } catch (error) {
        console.error("Error:", error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchDataNew = async () => {
      try {
        const response = await axios.post(
          "https://api-dp.ibnmarkit.com:443/api/v1/users/company-countries",
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
        )
        var ress = response.data.imports
        setRess(ress)
        var resex = response.data.exports
        setResex(resex)
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching company turnover:", error)
      }
    }

    fetchDataNew()
  }, [])

  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber)
  }

  return (
    <section className={styles.CountryImpExp} id="TradeCountry">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div className={styles.turnoverTbs}>
              <div className={styles.tabbuttons}>
                <button
                  onClick={() => handleTabClick(1)}
                  className={activeTab === 1 ? "active" : ""}
                >
                  Countries Imports from
                </button>
                <button
                  onClick={() => handleTabClick(2)}
                  className={activeTab === 2 ? "active" : ""}
                >
                  Countries Exports to
                </button>
              </div>

              <div className={styles.tabcontent}>
                {activeTab === 1 && (
                  <Row>
                    <Col md={12} lg={12}>
                      <div className={styles.supplyHead}>
                        {res && (
                          <h2>Where {res.company_name} Imports from ?</h2>
                        )}
                        {res && (
                          <p>
                            {" "}
                            {res.company_name} Imports from US 23%, China 21%,
                            Japan 18% and more
                          </p>
                        )}
                      </div>
                    </Col>
                    <Col md={7} lg={7}>
                      <div className={styles.Hidevigedaa}>
                        <img src="../../mapchart.png" width="100%" />
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
                    <Col md={5} lg={5}>
                      <div className={styles.topImpTble}>
                        <Table size="sm" className={styles.ImpExpTable}>
                          <thead>
                            <tr>
                              <th>Country </th>
                              <th>Import Value (USD %)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ress?.map((item, index) => (
                              <React.Fragment key={index}>
                                {index <= 3 ? (
                                  <tr key={index}>
                                    <td>{item.country}</td>
                                    <td>{item.percentage}</td>
                                  </tr>
                                ) : (
                                  <tr key={index} className={styles.blur}>
                                    <td>{item.country}</td>
                                    <td>{item.percentage}</td>
                                  </tr>
                                )}
                              </React.Fragment>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                  </Row>
                )}
                {activeTab === 2 && (
                  <Row>
                    <Col md={12} lg={12}>
                      <div className={styles.supplyHead}>
                        {res && <h2>Where {res.company_name} Exports to ?</h2>}
                        {res && (
                          <p>
                            {" "}
                            {res.company_name} Imports to US 23%, China 21%,
                            Japan 18% and more
                          </p>
                        )}
                      </div>
                    </Col>

                    <Col md={7} lg={7}>
                      <div className={styles.Hidevigedaa}>
                        <img src="../../mapchart.png" width="100%" />
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
                    <Col md={5} lg={5}>
                      <div className={styles.topImpTble}>
                        <Table size="sm" className={styles.ImpExpTable}>
                          <thead>
                            <tr>
                              <th>Country </th>
                              <th>Export Value (USD %)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {resex?.map((item, index) => (
                              <React.Fragment key={index}>
                                {index <= 3 ? (
                                  <tr key={index}>
                                    <td>{item.country}</td>
                                    <td>{item.percentage}</td>
                                  </tr>
                                ) : (
                                  <tr key={index} className={styles.blur}>
                                    <td>{item.country}</td>
                                    <td>{item.percentage}</td>
                                  </tr>
                                )}
                              </React.Fragment>
                            ))}
                          </tbody>
                        </Table>
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

export default CountryImpExp
