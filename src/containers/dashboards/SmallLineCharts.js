import React from 'react';
import { Row, Card, CardBody } from 'reactstrap';

import { Colxx } from 'components/common/CustomBootstrap';
import { SmallLineChart, SmallLineChartDollars } from 'components/charts';

import {
  smallChartData1,
  smallChartData2,
  smallChartData3,
} from '../../data/charts';

const SmallLineCharts = ({ itemClass = 'dashboard-small-chart' }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12" lg="4" className="mb-4">
          <Card className={itemClass}>
            <CardBody>
              <SmallLineChart data={smallChartData1} />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="12" lg="4" className="mb-4">
          <Card className={itemClass}>
            <CardBody>
              <SmallLineChart data={smallChartData2} />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="12" lg="4" className="mb-4">
          <Card className={itemClass}>
            <CardBody>
              <SmallLineChartDollars data={smallChartData3} />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default SmallLineCharts;
