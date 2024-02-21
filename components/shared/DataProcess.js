import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import styles from "./DataProcess.module.css";
import { Row } from "react-bootstrap";

const DataProcess = () => {
  return (
    <section className={styles.dataProcess} id="FourthSection">
        <Container>
          <Row>
            <div className="col-md-12">
            <div className={styles.Explthrous}>
              <h2>Explore Through A Wide Database!</h2>
              </div>
            </div>
          </Row>
            <Row>
                <div className="col-md-7">
                    <div className={styles.lern_extPivot}>
                    <h3 className={styles.dataProcessAnd}>
                    Data Process and Representation
                    </h3>
                    <p className={styles.theRawData}>
                    The raw data retrieved from trusted sources such as customs departments, trade authorities, government agencies and others, is processed and filtered. The import and export records of are cleaned, organised and integrated into our system and represented in various forms-textual, tabloid, interactive graphics, and more to cater to the individual needs of a user.
                    </p>
                    </div>
                </div>
                <div className="col-md-5">
                 <img className={styles.image4Icon} alt="" src="/image-4@2x.png" width="100%"/>
                </div>
                
            </Row>
        </Container>
      </section>
  );
};

export default DataProcess;
