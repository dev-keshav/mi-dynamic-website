import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import styles from "./PlatformIntroContainer.module.css";
import { Row } from "react-bootstrap";

const PlatformIntroContainer = () => {
  return (
    <section className={styles.platformInto} id="ThirdSecton">
     <Container fluid>
      <Row>
        <div className="col-md-5">
          <div className={styles.advantage}>
            <img className={styles.intersectIcon} alt="" src="/intersect.png" />
          </div>
        </div>
      <div className="col-md-7">
     
      <div className={styles.infrHed}>
        <h2 className={styles.platformIntro}>Platform Intro</h2>
        <div className={styles.marketInsideIs}>{`Market Inside works on prioritising the data needs each to an individual's requirements by providing our clients with an AI-based platform that consists of import and export records, country analysis, and in-depth information on companies. Our trade intelligence platform online is equipped with many useful tools & features such as -`}</div>
      </div>
      <Row>
      <div className="col-md-6">
      <div className={styles.listView}>
        <h3 className={styles.globalData}><span>Global</span>  Data</h3>
        <p className={styles.accessTheImport}>
        Access import-export data of more than 195 countries, including the exclusively available ones.
        </p>
      </div>
      </div>
      <div className="col-md-6">
      <div className={styles.listView}>
        <h3 className={styles.globalData}><span>Competitor</span> Analysis</h3>
        <p className={styles.accessTheImport}>
        Conduct a comprehensive competitive analysis, comparing details and specifications systematically.
        </p>
      </div>
      </div>
      <div className="col-md-6">
      <div className={styles.listView}>
        <h3 className={styles.globalData}>
        <span>In-Depth </span> Company Profile
        </h3>
        <p className={styles.accessTheImport}>
        Over a million profiles of companies around the world provide the ability to dive deeper into them.
        </p>
      </div>
      </div>
      
      <div className="col-md-6">
      <div className={styles.listView}>
        <h3 className={styles.globalData}>
        <span>Dashboard</span> Customisation
        </h3>
        <p className={styles.accessTheImport}>
        Easily customize the dashboard according to the profile, and choose how to work and utilise data.
        </p>
      </div>
      </div>
      </Row>
      </div>
      
      </Row>
      </Container>
    </section>
  );
};

export default PlatformIntroContainer;
