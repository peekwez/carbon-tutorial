import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  TableBatchActions,
  TableBatchAction,
  TableSelectAll,
  TableSelectRow,
  Tag,
  Button,
  CodeSnippet,
} from '@carbon/react';

import {
  TrashCan,
  ErrorOutline,
  CheckmarkFilled,
  ErrorFilled,
} from '@carbon/react/icons';

import SchemaModal from './SchemaModal';

const StatusIcon = ({ status }) => {
  return status === 'ACTIVE' ? (
    <CheckmarkFilled size={24} className="schema-page__active_icon" />
  ) : (
    <ErrorFilled size={24} className="schema-page__disabled_icon" />
  );
};

const TagData = ({ fields }) => {
  return fields.map((field, id) => <Tag key={id}>{field}</Tag>);
};

const renderCell = ({ id, value }) => {
  if (id.includes('status')) {
    return (
      <TableCell id={id} className="schema-page__status_td">
        <StatusIcon status={value} />
      </TableCell>
    );
  } else if (id.includes('properties') || id.includes('definitions')) {
    return (
      <TableCell id={id}>
        <TagData fields={value} />
      </TableCell>
    );
  } else return <TableCell id={id}>{value}</TableCell>;
};

const SchemaTable = ({ rows, headers }) => {
  const getRowDescription = rowId => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? (
      <CodeSnippet
        className="schema-page__code"
        type="multi">{`${JSON.stringify(row.schema, null, 2)}`}</CodeSnippet>
    ) : (
      ''
    );
  };

  const ModalStateManager = ({
    renderLauncher: LauncherContent,
    children: ModalContent,
  }) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        {!ModalContent || typeof document === 'undefined'
          ? null
          : ReactDOM.createPortal(
              <ModalContent open={open} setOpen={setOpen} />,
              document.body
            )}
        {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
      </>
    );
  };

  return (
    <DataTable
      rows={rows}
      headers={headers}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getSelectionProps,
        getBatchActionProps,
        onInputChange,
        selectedRows,
        getTableProps,
      }) => (
        <TableContainer
          title="Document Extraction Schemas"
          description="A collection of document extraction schemas.">
          <TableToolbar>
            <TableBatchActions {...getBatchActionProps()}>
              <TableBatchAction
                tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                renderIcon={ErrorOutline}
                onClick={() => console.log('clicked')}>
                Disable
              </TableBatchAction>
              <TableBatchAction
                tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                renderIcon={TrashCan}
                onClick={() => console.log('clicked')}>
                Delete
              </TableBatchAction>
            </TableBatchActions>
            <TableToolbarContent>
              <TableToolbarSearch
                tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                onChange={onInputChange}
              />
              <ModalStateManager
                renderLauncher={({ setOpen }) => (
                  <Button
                    tabIndex={
                      getBatchActionProps().shouldShowBatchActions ? -1 : 0
                    }
                    onClick={() => setOpen(true)}
                    size="lg"
                    kind="primary">
                    Add new schema
                  </Button>
                )}>
                {({ open, setOpen }) => (
                  <SchemaModal open={open} setOpen={setOpen} />
                )}
              </ModalStateManager>
            </TableToolbarContent>
          </TableToolbar>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableSelectAll {...getSelectionProps()} />
                <TableExpandHeader />
                {headers.map(header => (
                  <TableHeader
                    {...getHeaderProps({ header })}
                    className="schema-page__th">
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <React.Fragment key={row.id}>
                  <TableExpandRow {...getRowProps({ row })}>
                    <TableSelectRow {...getSelectionProps({ row })} />
                    {row.cells.map(cell => renderCell(cell))}
                  </TableExpandRow>
                  <TableExpandedRow colSpan={headers.length + 2}>
                    {getRowDescription(row.id)}
                  </TableExpandedRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

export default SchemaTable;
