import React from 'react';

import IntlMessages from 'helpers/IntlMessages';
import GradientCard from 'components/cards/GradientCard';

const GradientCardContainer = () => {
  return (
    <GradientCard>
      <p className="lead text-white">
        <IntlMessages id="dashboards.magic-is-in-the-details" />
      </p>
      <p className="text-white">
        <IntlMessages id="dashboards.yes-it-is-indeed" />
      </p>
    </GradientCard>
  );
};
export default GradientCardContainer;
