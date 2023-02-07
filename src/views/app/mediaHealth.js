import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { MediaHealthTable } from 'containers/ui/ReactTableCards';
import ProductCategoriesPolarArea from 'containers/dashboards/ProductCategoriesPolarArea';
import IconCard from 'components/cards/IconCard';
// data
import {
  tableData,
  cardsData,
  affectedCampaignsChartData,
  errorDistributionChartData,
} from 'data/accounts/mediaHealth';

const MediaHealth = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.media-health" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row className="icon-cards-row mb-2">
        {cardsData.map((item) => {
          return (
            <Colxx xxs="6" sm="4" md="3" lg="3" key={`icon_card_${item.id}`}>
              <IconCard {...item} className="mb-4" />
            </Colxx>
          );
        })}
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <MediaHealthTable data={tableData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" lg="6" className="mb-4">
          <ProductCategoriesPolarArea
            data={affectedCampaignsChartData}
            label="dashboards.affected-campaigns"
          />
        </Colxx>
        <Colxx xxs="12" lg="6" className="mb-4">
          <ProductCategoriesPolarArea
            data={errorDistributionChartData}
            label="dashboards.error-distribution"
          />
        </Colxx>
      </Row>
    </>
  );
};

export default MediaHealth;
