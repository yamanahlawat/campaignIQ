import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

import IntlMessages from 'helpers/IntlMessages';
import { PolarAreaChart } from 'components/charts';

const ProductCategoriesPolarArea = ({
  chartClass = 'chart-container',
  data,
  label,
}) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <IntlMessages id={label} />
        </CardTitle>
        <div className={chartClass}>
          <PolarAreaChart shadow data={data} />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCategoriesPolarArea;
