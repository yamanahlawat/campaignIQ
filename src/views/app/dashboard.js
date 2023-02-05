import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Card, CardBody, CardTitle } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import SmallLineCharts from 'containers/dashboards/SmallLineCharts';
import ProductCategoriesPolarArea from 'containers/dashboards/ProductCategoriesPolarArea';
import { BarChart } from 'components/charts';
import { ReactTableWithPaginationCard } from 'containers/ui/ReactTableCards';

// campaigns data
import carsonCampaigns from 'data/accounts/carson/campaigns';
import dropboxCampaigns from 'data/accounts/dropbox/campaigns';
import lumosCampaigns from 'data/accounts/lumos/campaigns';

// charts data
import {
  carsonImpressionsChartData,
  carsonClicksChartData,
  carsonSpendChartData,
  carsonPlatformMismatchChartData,
  carsonBarChartData,
} from 'data/accounts/carson/charts';
import {
  dropboxImpressionsChartData,
  dropboxClicksChartData,
  dropboxSpendChartData,
  dropboxPlatformMismatchChartData,
  dropboxBarChartData,
} from 'data/accounts/dropbox/charts';
import {
  lumosImpressionsChartData,
  lumosClicksChartData,
  lumosSpendChartData,
  lumosPlatformMismatchChartData,
  lumosBarChartData,
} from 'data/accounts/lumos/charts';

const DashboardPage = ({ match }) => {
  // get the selected account
  const selectedAccount = useSelector(({ settings }) => settings.account);
  let campaigns = [];
  let chartData = {};
  let platformMismatchData = {};
  let barChartData = {};
  switch (selectedAccount) {
    case 'carson':
      campaigns = carsonCampaigns;
      chartData = {
        impressions: carsonImpressionsChartData,
        clicks: carsonClicksChartData,
        spend: carsonSpendChartData,
      };
      platformMismatchData = carsonPlatformMismatchChartData;
      barChartData = carsonBarChartData;
      break;
    case 'lumos':
      campaigns = lumosCampaigns;
      chartData = {
        impressions: lumosImpressionsChartData,
        clicks: lumosClicksChartData,
        spend: lumosSpendChartData,
      };
      platformMismatchData = lumosPlatformMismatchChartData;
      barChartData = lumosBarChartData;
      break;
    case 'dropbox':
      campaigns = dropboxCampaigns;
      chartData = {
        impressions: dropboxImpressionsChartData,
        clicks: dropboxClicksChartData,
        spend: dropboxSpendChartData,
      };
      platformMismatchData = dropboxPlatformMismatchChartData;
      barChartData = dropboxBarChartData;
      break;
    default:
      campaigns = [];
  }

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb
            heading={
              selectedAccount.charAt(0).toUpperCase() + selectedAccount.slice(1)
            }
            match={match}
          />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-2">
          <SmallLineCharts
            itemClass="dashboard-small-chart-analytics"
            data={chartData}
          />
        </Colxx>
        <Colxx xxs="12" lg="6" className="mb-2">
          <ProductCategoriesPolarArea data={platformMismatchData} />
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
      <Row>
        <Colxx xxs="12" lg="12">
          <ReactTableWithPaginationCard campaigns={campaigns} />
        </Colxx>
      </Row>
    </>
  );
};

export default DashboardPage;
