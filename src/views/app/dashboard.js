import React from 'react';
import { Row, Card, CardBody, CardTitle } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import SmallLineCharts from 'containers/dashboards/SmallLineCharts';
import ProductCategoriesPolarArea from 'containers/dashboards/ProductCategoriesPolarArea';
import { BarChart } from 'components/charts';
import { barChartData } from 'data/charts';

const DashboardPage = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.dashboard" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <SmallLineCharts itemClass="dashboard-small-chart-analytics" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" lg="6" className="mb-4">
          <ProductCategoriesPolarArea />
        </Colxx>
        <Colxx xxs="12" lg="6" className="mb-5">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="dashboards.affected-metrics" />
              </CardTitle>
              <div className="chart-container">
                <BarChart shadow data={barChartData} />
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default DashboardPage;
