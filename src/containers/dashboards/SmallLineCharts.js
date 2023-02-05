import React from 'react';
import { Row, Card, CardBody } from 'reactstrap';

import { Colxx } from 'components/common/CustomBootstrap';
import { SmallLineChart, SmallLineChartDollars } from 'components/charts';

const SmallLineCharts = ({ itemClass = 'dashboard-small-chart', data }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12" lg="4" className="mb-4">
          <Card className={itemClass}>
            <CardBody>
              <SmallLineChart data={data.impressions} />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="12" lg="4" className="mb-4">
          <Card className={itemClass}>
            <CardBody>
              <SmallLineChart data={data.clicks} />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="12" lg="4" className="mb-4">
          <Card className={itemClass}>
            <CardBody>
              <SmallLineChartDollars data={data.spend} />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default SmallLineCharts;
