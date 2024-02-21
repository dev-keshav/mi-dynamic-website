import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import styles from "./StickyNavbar.module.css";
import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import  OverViewHead  from "./OverViewHead.js";

const StickyNavbar = () => {

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

           
    /* Method that will fix header after a specific scrollable */
           const isSticky = (e) => {
                const header = document.querySelector('.header-section');
                const scrollTop = window.scrollY;
                scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
            };

  return (
    <section className={styles.StickyNavbar} id="mychptsubheadig">
        <Container>
          <Row id="hidNav">
            <Col md={12} lg={12}>
            <div>
                
            <header className="header-section d-none d-xl-block">
            <div className={styles.top} id="top">
                    <a href="#CmpnOverview">Overview</a> |
                    <a href="#totalImports">Import &amp; Export Turnover</a> |
                    <a href="#TradeCountry">Countries</a> |
                    <a href="#commoditeies">Commodities</a> |
                    <a href="#suppilers">Supply Chain</a> |
                    <a href="#portses">Ports</a> |
                    <a href="#Competitors">Competitors</a> |
                    <a href="#ShipemntRecords">Shipment Records</a> |
                    <a href="#CompnyContcts">Company Contacts</a> |
                    <a href="#FAQs">FAQs</a>
                </div>
         </header>
                
                </div>
            </Col>
            
          </Row>
           
        </Container>
      </section>
  );
};

export default StickyNavbar;
