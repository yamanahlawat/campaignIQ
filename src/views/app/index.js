import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from 'layout/AppLayout';

const MediaHealth = React.lazy(() =>
  import(/* webpackChunkName: "views-media-health" */ './mediaHealth')
);
const AccountsPage = React.lazy(() =>
  import(/* webpackChunkName: "views-accounts" */ './accounts')
);
const DataExplorerPage = React.lazy(() =>
  import(/* webpackChunkName: "views-data-explorer" */ './dataExplorer')
);

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/media-health`}
            />
            <Route
              path={`${match.url}/media-health`}
              render={(props) => <MediaHealth {...props} />}
            />
            <Route
              path={`${match.url}/accounts`}
              render={(props) => <AccountsPage {...props} />}
            />
            <Route
              path={`${match.url}/data-explorer`}
              render={(props) => <DataExplorerPage {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
