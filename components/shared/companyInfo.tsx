"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import styles from "./CompanyInfo.module.css";
import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const CompanyInfo = () => {

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  }
  
  const originalDate = '2022-01-01';
  const formattedDate = formatDate(originalDate);

  const endDate = '2022-12-31';
  const EndfortmateDate = formatDate(endDate);



  const [res, setRes] = useState(null);  // Use state to handle asynchronous data

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


  return (
    <section className={styles.CompanyInfo}>
        <Container>
          <Row>
            <Col md={3} lg={3}>
                <div className={styles.profImg}>
                    <img src="../../adbclimite.png" width="100%" />
                </div>
            </Col>
            <Col md={9} lg={9}>
                <div className={styles.ProfDescrpnt}>
                {res && <h1>{res.company_name}</h1>}  {/* Conditionally render based on res */}
                    

                {res &&   <p className={styles.mb15}>  ( {formattedDate} to {EndfortmateDate})</p>}
                    {res && <p> <svg className={styles.faicons} height="1em" width="1em" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="#fd9852" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                    {res.address}
                     </p>}
                     {res &&   <p> <svg className={styles.faicons} aria-hidden="true" height="1em" width="1em" focusable="false" data-prefix="far" data-icon="flag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="#fd9852" d="M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"></path></svg>
                    {res.country_name}</p>}
                     <Row>
                     <ul className={styles.turnOvrInfo}>
                     {res &&  <li>Import Turnover: <br /><b> {res.import_turnover} </b></li>}
                        {res &&   <li>Export Turnover: <br /><b> {res.export_turnover} </b></li> }
                        {res &&    <li>Import Rank in {res.country_name}: <br /><b>40</b></li>}
                       {res &&    <li>Export Rank in {res.country_name}: <br /><b>30</b></li> }
                        </ul>
                     </Row>
                </div>
            </Col>
          </Row>
           
        </Container>
      </section>
  );
};

export default CompanyInfo;
