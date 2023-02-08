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
  carsonPlatformMismatchChartData,
  carsonBarChartData,
  carsonCardsData,
  carsonWarningsData,
  carsonErrorsCardsData,
} from 'data/accounts/carson/charts';
import {
  dropboxPlatformMismatchChartData,
  dropboxBarChartData,
  dropboxCardsData,
  dropboxWarningsData,
  dropboxErrorsCardsData,
} from 'data/accounts/dropbox/charts';
import {
  lumosPlatformMismatchChartData,
  lumosBarChartData,
  lumosCardsData,
  lumosWarningsData,
  lumosErrorsCardsData,
} from 'data/accounts/lumos/charts';

const getData = (selectedAccount) => {
  let campaigns = [];
  let platformMismatchData = {};
  let barChartData = {};
  let insightsCardsData = [];
  let errorsCardsData = [];
  let warningsData = [];
  switch (selectedAccount) {
    case 'carson':
      campaigns = carsonCampaigns;
      platformMismatchData = carsonPlatformMismatchChartData;
      barChartData = carsonBarChartData;
      insightsCardsData = carsonCardsData;
      errorsCardsData = carsonErrorsCardsData;
      warningsData = carsonWarningsData;
      return {
        campaigns,
        platformMismatchData,
        barChartData,
        insightsCardsData,
        warningsData,
        errorsCardsData,
      };
    case 'lumos':
      campaigns = lumosCampaigns;
      platformMismatchData = lumosPlatformMismatchChartData;
      barChartData = lumosBarChartData;
      insightsCardsData = lumosCardsData;
      warningsData = lumosWarningsData;
      errorsCardsData = lumosErrorsCardsData;
      return {
        campaigns,
        platformMismatchData,
        barChartData,
        insightsCardsData,
        warningsData,
        errorsCardsData,
      };
    case 'dropbox':
      campaigns = dropboxCampaigns;
      platformMismatchData = dropboxPlatformMismatchChartData;
      barChartData = dropboxBarChartData;
      insightsCardsData = dropboxCardsData;
      warningsData = dropboxWarningsData;
      errorsCardsData = dropboxErrorsCardsData;
      return {
        campaigns,
        platformMismatchData,
        barChartData,
        insightsCardsData,
        warningsData,
        errorsCardsData,
      };
    default:
      return {
        campaigns: [],
        platformMismatchData: {},
        barChartData: {},
        insightsCardsData: [],
        warningsData: {},
        errorsCardsData: [],
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
    platformMismatchData,
    barChartData,
    campaigns,
    insightsCardsData,
    warningsData,
    errorsCardsData,
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
              <Row className="icon-cards-row mb-2">
                {errorsCardsData.map((item) => {
                  return (
                    <Colxx
                      xxs="6"
                      sm="6"
                      md="3"
                      lg="2"
                      key={`icon_card_${item.id}`}
                    >
                      <IconCard {...item} className="mb-4" />
                    </Colxx>
                  );
                })}
              </Row>
              <Row>
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
                {insightsCardsData.map((item) => {
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
