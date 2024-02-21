import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DiscoverSectionForm.module.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const DiscoverSectionForm = () => {
  return (
    <main className={styles.discoverSection} id="FistSection">
      <Container>
      <div className="row">
     
      <div className="col-md-6">
      <div className={styles.paragraph}>
        <div className={styles.paragraphChild} />
        <div className={styles.pivotYourBusinessContainer}>
          <p className={styles.pivotYourBusiness}>
            <span className={styles.with}>
              <h2 className={styles.pivotYourBusiness2}>
                Pivot Your Business
              </h2>
            </span>
          </p>
          <p className={styles.withGlobalTradeData}>
            <span className={styles.with}>
              <span className={styles.pivotYourBusiness2}>With</span>
              <span className={styles.span}>
                <span className={styles.span1}>{`  `}</span>
              </span>
            </span>
            <span className={styles.span}>
              <span className={styles.globalTradeData1}>Global Trade Data</span>
            </span>
          </p>
        </div>
      </div>
      <div className={styles.inputTextButton}>
        <div className={styles.inputText}>
         
          <Form.Control
          placeholder="Enter Your Email ID"
          aria-label="Enter Your Email ID"
          aria-describedby="basic-addon2"
        />
        </div>
        <div className={styles.signupButton}>
        
          <Button variant="danger" className="signupButtonChild">Sign up for free</Button>{' '}
          
        </div>
      </div>
      </div>
      <div className="col-md-6">
      {/* <img className={styles.image2Icon} alt="" src="/image-2@2x.png" /> */}
          <Player
            autoplay
            loop
            src="https://lottie.host/735ca3c6-8675-47d3-802b-21a00e673dc2/JnOMviuc1T.json"
            style={{  }}
          >
         
          </Player>
      </div>
      
      </div>
      </Container>
    </main>
  );
};

export default DiscoverSectionForm;
