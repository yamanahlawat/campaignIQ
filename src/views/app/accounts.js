import React, { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Nav,
  NavItem,
  TabContent,
  TabPane,
} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import SmallLineCharts from 'containers/dashboards/SmallLineCharts';
import ProductCategoriesPolarArea from 'containers/dashboards/ProductCategoriesPolarArea';
import { BarChart } from 'components/charts';
import { CampaignsTable, WarningsTable } from 'containers/ui/ReactTableCards';
import classnames from 'classnames';
import { changeAccount } from 'redux/actions';
import IconCard from 'components/cards/IconCard';

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
  carsonCardsData,
  carsonWarningsData,
} from 'data/accounts/carson/charts';
import {
  dropboxImpressionsChartData,
  dropboxClicksChartData,
  dropboxSpendChartData,
  dropboxPlatformMismatchChartData,
  dropboxBarChartData,
  dropboxCardsData,
  dropboxWarningsData,
} from 'data/accounts/dropbox/charts';
import {
  lumosImpressionsChartData,
  lumosClicksChartData,
  lumosSpendChartData,
  lumosPlatformMismatchChartData,
  lumosBarChartData,
  lumosCardsData,
  lumosWarningsData,
} from 'data/accounts/lumos/charts';

const getData = (selectedAccount) => {
  let campaigns = [];
  let chartData = {};
  let platformMismatchData = {};
  let barChartData = {};
  let cardsData = [];
  let warningsData = [];
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
      cardsData = carsonCardsData;
      warningsData = carsonWarningsData;
      return {
        campaigns,
        chartData,
        platformMismatchData,
        barChartData,
        cardsData,
        warningsData,
      };
    case 'lumos':
      campaigns = lumosCampaigns;
      chartData = {
        impressions: lumosImpressionsChartData,
        clicks: lumosClicksChartData,
        spend: lumosSpendChartData,
      };
      platformMismatchData = lumosPlatformMismatchChartData;
      barChartData = lumosBarChartData;
      cardsData = lumosCardsData;
      warningsData = lumosWarningsData;
      return {
        campaigns,
        chartData,
        platformMismatchData,
        barChartData,
        cardsData,
        warningsData,
      };
    case 'dropbox':
      campaigns = dropboxCampaigns;
      chartData = {
        impressions: dropboxImpressionsChartData,
        clicks: dropboxClicksChartData,
        spend: dropboxSpendChartData,
      };
      platformMismatchData = dropboxPlatformMismatchChartData;
      barChartData = dropboxBarChartData;
      cardsData = dropboxCardsData;
      warningsData = dropboxWarningsData;
      return {
        campaigns,
        chartData,
        platformMismatchData,
        barChartData,
        cardsData,
        warningsData,
      };
    default:
      return {
        campaigns: [],
        chartData: {},
        platformMismatchData: {},
        barChartData: {},
        cardsData: {},
        warningsData: {},
      };
  }
};

const DashboardPage = ({ match, location, changeAccountAction, account }) => {
  const { state } = location;
  const [activeTab, setActiveTab] = useState('errors');
  const selectedAccountTable = state?.account || account;
  useEffect(() => {
    changeAccountAction(selectedAccountTable);
  }, [changeAccountAction, selectedAccountTable]);

  // get the selected account
  const selectedAccount = useSelector(({ settings }) => settings.account);
  const {
    chartData,
    platformMismatchData,
    barChartData,
    campaigns,
    cardsData,
    warningsData,
  } = getData(selectedAccount);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>
            {selectedAccount.charAt(0).toUpperCase() + selectedAccount.slice(1)}
          </h1>
          <Breadcrumb match={match} />
          <Nav tabs className="separator-tabs ml-0 mb-5">
            <NavItem>
              <NavLink
                location={{}}
                to="#"
                className={classnames({
                  active: activeTab === 'errors',
                  'nav-link': true,
                })}
                onClick={() => setActiveTab('errors')}
              >
                <IntlMessages id="Errors" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                location={{}}
                to="#"
                className={classnames({
                  active: activeTab === 'insights',
                  'nav-link': true,
                })}
                onClick={() => setActiveTab('insights')}
              >
                <IntlMessages id="Insights" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                location={{}}
                to="#"
                className={classnames({
                  active: activeTab === 'warnings',
                  'nav-link': true,
                })}
                onClick={() => setActiveTab('warnings')}
              >
                <IntlMessages id="Warnings" />
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="errors">
              <Row>
                <Colxx xxs="12" className="mb-2">
                  <SmallLineCharts
                    itemClass="dashboard-small-chart-analytics"
                    data={chartData}
                  />
                </Colxx>
                <Colxx xxs="12" lg="6" className="mb-2">
                  <ProductCategoriesPolarArea
                    data={platformMismatchData}
                    label="table.platform-wise-distribution"
                  />
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
                  <CampaignsTable
                    campaigns={campaigns.slice(1, 50)}
                    label="table.campaign-taxonomy-mismatches"
                  />
                </Colxx>
              </Row>
              <Row>
                <Colxx xxs="12" lg="12">
                  <CampaignsTable
                    campaigns={campaigns.slice(50, 100)}
                    label="table.campaign-tracker-mismatches"
                  />
                </Colxx>
              </Row>
            </TabPane>
            <TabPane tabId="insights">
              <Row className="icon-cards-row mb-2">
                {cardsData.map((item) => {
                  return (
                    <Colxx
                      xxs="6"
                      sm="4"
                      md="3"
                      lg="3"
                      key={`icon_card_${item.id}`}
                    >
                      <IconCard {...item} className="mb-4" />
                    </Colxx>
                  );
                })}
              </Row>
            </TabPane>
            <TabPane tabId="warnings">
              <Row>
                <Colxx xxs="12" lg="12">
                  <WarningsTable data={warningsData} />
                </Colxx>
              </Row>
            </TabPane>
          </TabContent>
        </Colxx>
      </Row>
    </>
  );
};

const mapStateToProps = ({ settings }) => {
  const { account } = settings;
  return {
    account,
  };
};
export default connect(mapStateToProps, { changeAccountAction: changeAccount })(
  DashboardPage
);
