/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
import React from 'react';
import { Card, CardBody, CardTitle, Badge } from 'reactstrap';
import { useTable, usePagination, useSortBy } from 'react-table';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import IntlMessages from 'helpers/IntlMessages';
import DatatablePagination from 'components/DatatablePagination';

import products from '../../data/products';

function Table({ columns, data, divided = false, defaultPageSize = 10 }) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: defaultPageSize },
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <table
        {...getTableProps()}
        className={`r-table table ${classnames({ 'table-divided': divided })}`}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  key={`th_${columnIndex}`}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sorted-desc'
                        : 'sorted-asc'
                      : ''
                  }
                >
                  {column.render('Header')}
                  <span />
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={`td_${cellIndex}`}
                    {...cell.getCellProps({
                      className: cell.column.cellClass,
                    })}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <DatatablePagination
        page={pageIndex}
        pages={pageCount}
        canPrevious={canPreviousPage}
        canNext={canNextPage}
        pageSizeOptions={[4, 10, 20, 30, 40, 50]}
        showPageSizeOptions={false}
        showPageJump={false}
        defaultPageSize={pageSize}
        onPageChange={(p) => gotoPage(p)}
        onPageSizeChange={(s) => setPageSize(s)}
        paginationMaxSize={pageCount}
      />
    </>
  );
}

export const CampaignsTable = ({ campaigns }) => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Platform',
        accessor: 'platform',
        cellClass: 'list-item-heading w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Campaign Name',
        accessor: 'campaign',
        cellClass: 'text-muted w-40',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Affected Impressions',
        accessor: 'impressions',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Affected Clicks',
        accessor: 'clicks',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Affected Spend',
        accessor: 'spend',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
    ],
    []
  );

  return (
    <Card className="mb-4">
      <CardBody>
        <CardTitle>
          <IntlMessages id="table.campaign-taxonomy-mismatches" />
        </CardTitle>
        <Table columns={cols} data={campaigns} />
      </CardBody>
    </Card>
  );
};

export const MediaHealthTable = ({ data }) => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Account',
        accessor: 'account',
        cellClass: 'list-item-heading w-15',
        Cell: (props) => (
          <NavLink
            to={{
              pathname: '/app/accounts',
              state: { account: props.value.toLowerCase() },
            }}
          >
            {props.value} <i className="iconsminds-link text-info" />
          </NavLink>
        ),
      },
      {
        Header: 'Total Campaigns',
        accessor: 'totalCampaigns',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Affected Campaigns',
        accessor: 'campaigns',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Errors',
        accessor: 'errors',
        cellClass: 'text-danger w-10 font-weight-bold',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Health',
        accessor: 'health',
        cellClass: 'text-muted w-10',
        Cell: (props) => (
          <>
            {props.value === 100 ? (
              <Badge color="success" pill className="mb-1">
                {props.value} % healthy
              </Badge>
            ) : (
              <Badge color="danger" pill className="mb-1">
                {props.value} % unhealthy
              </Badge>
            )}
          </>
        ),
      },
      {
        Header: 'Managers',
        accessor: 'managers',
        cellClass: 'w-10',
        Cell: (props) => (
          <a href="mailto:test@google.com">
            {props.value} <i className="iconsminds-email text-info" />
          </a>
        ),
      },
      {
        Header: 'Total Spend',
        accessor: 'totalSpend',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Affected Spend',
        accessor: 'spend',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Total Impressions',
        accessor: 'totalImpressions',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Affected Impressions',
        accessor: 'impressions',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Total Clicks',
        accessor: 'totalClicks',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Affected Clicks',
        accessor: 'clicks',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
    ],
    []
  );

  return (
    <Card className="mb-4">
      <CardBody style={{ overflow: 'auto' }}>
        <CardTitle>
          <IntlMessages id="table.account-health" />
        </CardTitle>
        <Table columns={cols} data={data} />
      </CardBody>
    </Card>
  );
};

export const ReactTableDivided = () => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'title',
        cellClass: 'list-item-heading w-40',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Sales',
        accessor: 'sales',
        cellClass: 'text-muted  w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Stock',
        accessor: 'stock',
        cellClass: 'text-muted  w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Category',
        accessor: 'category',
        cellClass: 'text-muted  w-40',
        Cell: (props) => <>{props.value}</>,
      },
    ],
    []
  );
  return (
    <div className="mb-4">
      <CardTitle>
        <IntlMessages id="table.divided" />
      </CardTitle>
      <Table columns={cols} data={products} divided />
    </div>
  );
};
