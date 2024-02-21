import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Information.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import React from 'react';


const Information = () => {
   return (
    
         <section className={styles.policyPage} id="policyPage">

            <dvi className="policyContent">
               <Container>
                  <Row>
                     <Col>
                        <div className='privhead'>
                           <h1>Privacy Policy</h1>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </dvi>
    
            <div className="privacytext">
               <Container>
                  <Row>
                     <Col>
                        <p>Market Inside Limited is committed to maintain the dignity of your privacy and safeguard your personal information, which you share with us. We request you to read our “Privacy Policy” carefully for understanding how you’re personal and business information will be treated and kept secured. This policy is applicable only to the website operated by Market Inside Limited and not by any other company.</p>
                        <p className="fontheadprcy">What type of information we collect?</p>
                        <p>When you use our website and register your account at our online platform, we may collect a variety of information from and about you in different ways. We ask for and store important details including your business' name, address, e-mail address and other identifying contact data. Additionally, our web servers automatically collect the IP addresses from which you accessed the site. We may also collect the information you disclose in chat rooms.</p>

                        <p className="fontheadprcy">Use of Personal Information</p>
                        <p>We have the right to communicate with you through your personal information – email address or phone number for keeping you updated about our offerings or any other purpose. </p>
                        <p>We use your personal information to identify you as a user and improve your experience on our website. We may use your e-mail address to contact you regarding any product or service you obtain on our site. We may also associate your personal information with information which we collect about your activities on our website, such as purchases, transactions and request of particular pages through our site. We may modify the content which you receive through our website in future based on your preferences and activities.</p>

                        <p className="fontheadprcy">Use of Cookies</p>
                        <p>By using our website, you accept the use of cookies, which are small data files that our website sends to your browser for storage on your computer’s hard drive. We use cookies to protect confidential data, track your activities on our website and better serve your needs and interests.</p>

                        <p className="fontheadprcy">Security</p>
                        <p>We use cutting-edge encryption methods to transmit your personal information from your computer to our computer through the World Wide Web. We restrict access to any transactional portions of our website to computers running web browsers that support Secure Socket Layer (SSL) protocol. Please remember that you as a user play an important role in security as well. Your password which you generate after completing registration process on our website will be kept secured and should never be shared with anyone. We want you to change your password frequently for security reasons. Once you have finished using our website, you should log off your account so that no unauthorized individuals can use our website with your name and account information. Regardless of the precautions taken by us and by you, guarantee of perfect security can’t be taken on the Internet. We cannot ensure or warrant the security of any information you transmit to us and you transmit such information at your own risk.</p>
                        <p className="fontheadprcy">Changes to Privacy Policy</p>
                        <p>We reserve full rights to modify our Privacy Policy from time to time. The changes may reflect in the way we collect and use information or changes in privacy-related laws, regulations and industry standards. Accordingly, we reserve the right to change this policy at any time by posting the revised policy on our website.</p>

                     </Col>
                  </Row>
               </Container>
            </div>
            </section>
     
        
      
);
}


export default Information;
