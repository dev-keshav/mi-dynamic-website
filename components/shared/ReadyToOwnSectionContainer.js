import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import styles from "./ReadyToOwnSectionContainer.module.css";
import { Player } from '@lottiefiles/react-lottie-player';

const ReadyToOwnSectionContainer = () => {
  return (
    <section className={styles.readyToOwnSection} id="SecondSection">
      <Container>
        <Row>
          <div className="col-md-12">
            <div className={styles.readyToOwn}>Explore Through A Wide Database!</div>
          </div>
          </Row>
      <Row>
      <div className="col-md-5">
        {/* <img className={styles.image3Icon} alt="" src="/image-3@2x.png" /> */}
        <Player
            autoplay
            loop
            src="https://lottie.host/ae1579f7-afe0-4ae1-914c-cab5cad5c549/EUMqwrEu0N.json"
            style={{  }}
          >
         
          </Player>
      </div>
      
      <div className="col-md-7">
        <div  className={styles.awidedata}>
        <div className={styles.list}>
          <div className={styles.couMarkt}>195+</div>
            <div className={styles.registeredCompanies}>COUNTRIES TRADE DATA</div>
          </div>
          <div className={styles.list}>
          <div className={styles.couMarkt}>29+</div>
            <div className={styles.registeredCompanies}>EXCLUSIVE COUNTRIES</div>
          </div>
    
          <div className={styles.list}>
          <div className={styles.couMarkt}>2B+</div>
            <div className={styles.registeredCompanies}>SHIPMENT RECORDS</div>
          </div>
          <div className={styles.list}>
          <div className={styles.couMarkt}>3M+</div>
            <div className={styles.registeredCompanies}>IMPORTER EXPORTER</div>
          </div>
          
          
        </div>
      </div>

      </Row>
      </Container>
    </section>
  );
};

export default ReadyToOwnSectionContainer;
