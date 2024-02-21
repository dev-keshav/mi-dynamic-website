import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CanvasJSReact from '@canvasjs/react-charts';
import axios from 'axios';
import styles from './ImporterExTurnover.module.css';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface DataPoint {
  x: Date;
  y: number;
}

const LineChart: React.FC = () => {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://api-dp.ibnmarkit.com:443/api/v1/users/company-turnover',
          {
            from: '2022-01-01',
            to: '2022-12-31',
            country_code: 'IN',
            company_code: '0305008111',
          },
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwNzk0OWNiLWZmODItNGVkOS1hNzZhLWMxOGRmOThiZDZkYyIsImlhdCI6MTcwNDU0OTU4MH0.sMR6ZZ52KNkiXG8V-Y6JxjkscCOOEDY7DPEFc5nMU88',
              'Content-Type': 'application/json',
            },
            redirect: 'follow',
          }
        );

        const responseImports = response.data.imports;

        if (Array.isArray(responseImports)) {
          const newDataPoints: DataPoint[] = responseImports.map((item) => ({
            x: new Date(item.timestamp),
            y: item.value,
          }));
          setDataPoints(newDataPoints);

          // Log newDataPoints to the console
          console.log('New Data Points:', newDataPoints);
        } else {
          console.error(
            'Unexpected data structure in API response:',
            response.data
          );
        }

        const res: DataPoint[] = response.data.imports || [];
        const newDataPoints: DataPoint[] = res.map((item) => ({
          x: new Date(item.timestamp),
          y: item.value,
        }));

        setDataPoints(newDataPoints);

        console.log(newDataPoints);
      } catch (error) {
        console.error('Error fetching import turnover:', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    title: {
      text: 'Import Value in USD %',
      color: '#fd9852',
      fontColor: '#555',
      margin: 50,
      fontWeight: 'normal',
      fontSize: 16,
    },
    axisX: {
      title: 'Months',
    },
    axisY: {
      title: 'Import Value (USD %)',
    },
    data: [
      {
        type: 'line',
        markerSize: 12,
        xValueFormatString: 'MMM, YYYY',
        yValueFormatString: '#%',
        dataPoints: dataPoints,
      },
    ],
  };

  return (
    <section className={styles.ImpExpTurnover} id="totalImports">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div>
              <CanvasJSChart options={options} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LineChart;
