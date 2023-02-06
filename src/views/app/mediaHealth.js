import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { MediaHealthTable } from 'containers/ui/ReactTableCards';
import mediaHealthTableData from 'data/accounts/mediaHealth';

const HealthCheck = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.media-health" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <MediaHealthTable data={mediaHealthTableData} />
        </Colxx>
      </Row>
    </>
  );
};

export default HealthCheck;
