import React, { useEffect, useState } from 'react';
import SchemaTable from './SchemaTable';
import {
  // Link,
  DataTableSkeleton,
  Pagination,
  Grid,
  Column,
} from '@carbon/react';
import schemas from './data';
// import { gdxAPI } from '../../services';
// const octokitClient = new Octokit({});

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'description',
    header: 'Description',
  },
  {
    key: 'version',
    header: 'Version',
  },
  {
    key: 'tokens',
    header: 'Tokens',
  },
  {
    key: 'properties',
    header: 'Properties',
  },
  {
    key: 'definitions',
    header: 'Definitions',
  },
  {
    key: 'status',
    header: 'Status',
  },
];

const getRowItems = rows =>
  rows.map(row => ({
    ...row,
    key: row.version,
    name: row.name,
    description: row.description,
    version: row.version,
    status: row.status,
    tokens: row.tokens,
    schema: row.definition,
    properties: Object.keys(row.definition.properties),
    definitions: row.definition.definitions
      ? Object.keys(row.definition.definitions)
      : [],
  }));

const SchemaPage = () => {
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getSchemas() {
      // const res = await gdxAPI({ method: 'GET', path: '/api/v1/schemas/list' });
      // //const data = await res.json();
      // console.log(res);
      // console.log(res.status);
      // console.log(data);
      // console.log(data);
      // const movies = await response.json();
      const res = {
        status: 200,
        data: schemas,
      };

      if (res.status === 200) {
        setRows(getRowItems(res.data.schemas));
      } else {
        setError('Error obtaining schema data');
      }
      setLoading(false);
    }

    getSchemas();
  }, []);

  if (loading) {
    return (
      <Grid className="schema-page">
        <Column lg={16} md={8} sm={4} className="schema-page__r1">
          <DataTableSkeleton
            columnCount={headers.length + 1}
            rowCount={10}
            headers={headers}
          />
        </Column>
      </Grid>
    );
  }

  if (error) {
    return `Error! ${error}`;
  }

  // If we're here, we've got our data!
  return (
    <Grid className="schema-page">
      <Column lg={16} md={8} sm={4} className="schema-page__r1">
        <SchemaTable
          headers={headers}
          rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
        />
        <Pagination
          totalItems={rows.length}
          backwardText="Previous page"
          forwardText="Next page"
          pageSize={currentPageSize}
          pageSizes={[5, 10, 15, 25]}
          itemsPerPageText="Items per page"
          onChange={({ page, pageSize }) => {
            if (pageSize !== currentPageSize) {
              setCurrentPageSize(pageSize);
            }
            setFirstRowIndex(pageSize * (page - 1));
          }}
        />
      </Column>
    </Grid>
  );
};

export default SchemaPage;
