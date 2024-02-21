import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import styles from "./EmployeeContacts.module.css";
import { Col, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

const EmployeeContacts = () => {

  return (
    <section className={styles.EmployeeContacts} id="CompnyContcts">
        <Container>
          <Row >
          <Col md={12} lg={12}>
            <div className={styles.supplyHead}>
                <h2>Company Employee Contacts</h2>
            </div>
            </Col>
            <Col md={12} lg={12}>
                <div className={styles.EmplTable}>
                    <Table className={styles.tablFullwidth}>
                        
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td><a href="" target="_blank">Siddharth Karnawat</a></td>
                    <td>Head Trade Marketing, Service Delivery &amp; NFR</td>
                    <td>Maharashtra</td>
                    <td className={styles.blur}>Siddharth.Karnawat@Nayaraenergy.Com</td>
                    <td> <a className={styles.colorblack} href="#"> <img src="../../license.png" /> View email..  </a> </td>
                    <td>(+91) 9899 * * * * * * *</td>
                    </tr>
                    <tr>
                    <td><a href="" target="_blank">Purnendu Baroowa</a></td>
                    <td>Divisional Head</td>
                    <td>Maharashtra</td>
                    <td>Purnendu.Baroowa@Nayaraenergy.Com</td>
                    <td> <a className={styles.colorblack} href="#"> <img src="../../license.png" /> View email..  </a> </td>
                    <td>(+91) 9899 * * * * * * *</td>
                    </tr>
                    <tr className={styles.blur}>
                    <td><a href="" target="_blank">Aditya Gupta</a></td>
                    <td>Business Owner</td>
                    <td>Chhattisgarh</td>
                    <td>Aditya.Gupta@Nayaraenergy.Com</td>
                    <td> <a className={styles.colorblack} href="#"> <img src="../../license.png" /> View email..  </a> </td>
                    <td>(+91) 9899 * * * * * * *</td>
                    </tr>
                    <tr>
                    <td><a href="" target="_blank">Ashish Niranjan</a></td>
                    <td>Vice President And Head, Shipping And Operations</td>
                    <td>Maharashtra</td>
                    <td>Ashish.Niranjan@Nayaraenergy.Com</td>
                    <td> <a className={styles.colorblack} href="#"> <img src="../../license.png" /> View email..  </a> </td>
                    <td>(+91) 9899 * * * * * * *</td>
                    </tr>
                    <tr className={styles.blur}>
                    <td><a href="" target="_blank">Poonam Thakar</a></td>
                    <td>Head Of Investigations</td>
                    <td>Maharashtra</td>
                    <td>Poonam.Thakar@Nayaraenergy.Com</td>
                    <td> <a className={styles.colorblack} href="#"> <img src="../../license.png" /> View email..  </a> </td>
                    <td>(+91) 9899 * * * * * * *</td>
                    </tr>
                    <tr>
                    <td><a href="" target="_blank">Shashank Patwa </a></td>
                    <td>Head Brand Communication</td>
                    <td>Maharashtra</td>
                    <td>Shashank.Patwa@Nayaraenergy.Com</td>
                    <td> <a className={styles.colorblack} href="#"> <img src="../../license.png" /> View email..  </a> </td>
                    <td>(+91) 9899 * * * * * * *</td>
                    </tr>
                    <tr className={styles.blur}>
                    <td><a href="" target="_blank">Chaitanya Bennuri</a></td>
                    <td>Regional Head</td>
                    <td>Telangana</td>
                    <td>Chaitanya.Bennuri@Nayaraenergy.Com</td>
                    <td> <a className={styles.colorblack} href="#"> <img src="../../license.png" /> View email..  </a> </td>
                    <td>(+91) 9899 * * * * * * *</td>
                    </tr>
                    <tr>
                    <td className={styles.blur}><a href="" target="_blank">Gaurav Chatterjee</a></td>
                    <td>Head Logistics (Petrochemicals)</td>
                    <td>Gujarat</td>
                    <td>Gaurav.Chatterjee@Nayaraenergy.Com</td>
                    <td> <a className={styles.colorblack} href="#"> <img src="../../license.png" /> View email..  </a> </td>
                    <td>(+91) 9899 * * * * * * *</td>
                    </tr>
                    </tbody>

                    </Table>
                </div>
            </Col>
          </Row>

          <Row >
            
          </Row>
           
        </Container>
      </section>
  );
};

export default EmployeeContacts;
