import styles from "./CustomizedDashboardForm.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

const CustomizedDashboardForm = () => {
  return (
    <article className={styles.customizedDashboard} id="FiftSection">
      <Container fluid>
      <Row>
            <div className="col-md-12">
            <div className={styles.Explthrous}>
              <h2>Highlighted Features</h2>
              </div>
            </div>
          </Row>
     <Row>
     <div className="col-md-6">
      <div className={styles.customisedDashboardParent}>
        <h3 className={styles.customisedDashboard}>Customised Dashboard</h3>
        <p className={styles.theCustomisationOf}>
          The customisation of the dashboard is an easy-to-use feature available
          in the dashboard to create a working space in our online trade
          intelligence platform according to their preferences and requirements,
          allowing them to work more efficiently and effectively.
        </p>
      </div>
     </div>
    <div className="col-md-6">
      <img className={styles.image5Icon} alt="" src="/image-5@2x.png" width="100%" />
    </div>
     </Row>
      <Row className="mt-5 dflx">
        <div className="col-md-6">
          <img className={styles.image6Icon} alt="" src="/image-6@2x.png" width="100%" />
        </div>
        <div className="col-md-6">
          <div className={styles.inDepthCompanyAnalysisParent}>
            <h3 className={styles.customisedDashboard}>
              In-Depth Company Analysis
            </h3>
            <p className={styles.theCustomisationOf}>
            The millions of profiles of different companies provide detailed information on their whereabouts and deep insights into their business operations, including essential intelligence on employees. The below section sheds light on the bifurcation of this.
            </p>
          </div>
        </div>
      </Row>
      </Container>
    </article>
  );
};

export default CustomizedDashboardForm;
