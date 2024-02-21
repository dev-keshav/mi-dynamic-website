import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';


function AllCollapseExample() {
  return (
    
    <Accordion className='AccordionHeadti'>
      <Container>
      <Row>
        <dvi className="col-md-12">
        <h2 className='addOn'>
        Add-On Features Of Company Analysis Include:
        </h2>
        </dvi>
      </Row>
      <Accordion.Item eventKey="0">
        <Accordion.Header>a) Supply Chain Analysis</Accordion.Header>
        <Accordion.Body>
        The integration of information related to the importation and exportation of commodities, ranging from raw materials to finished goods, can be utilised to conduct a thorough analysis of how a business is functioning.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>b) Trade Analysis</Accordion.Header>
        <Accordion.Body>
        The trade analysis devises a way to measure the trade performance of any organisation by employing various mechanisms and integration of import and export records into the dashboard, revealing key insights into a company's trade.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>c) Employee Analysis</Accordion.Header>
        <Accordion.Body>
        The details regarding the employees working in an organisation in different departments can be accessed in the company's information system to analyse different aspects of selected employees for concluding the objective.
        </Accordion.Body>
      </Accordion.Item>
      
      </Container>
    </Accordion>
  );
}

export default AllCollapseExample;

