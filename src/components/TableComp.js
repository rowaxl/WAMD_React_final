import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';

import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons'

const columns = [
  { id: 'id', label: 'id', minWidth: 100 },
  { id: 'title', label: 'Title', minWidth: 300 },
  {
    id: 'state',
    label: 'state',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'url',
    label: 'url',
    minWidth: 300,
    align: 'left',
  },
  {
    id: 'created',
    label: 'Created at',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'updated',
    label: 'Updated at',
    minWidth: 100,
    align: 'left',
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 'calc(100vh - 216px)'
  },
  editButton: {
    color: 'red'
  },
  deleteButton: {
    color: 'red'
  }
});

export default function StickyHeadTable({
  dataRows,
  handleAddRow,
  handleEditRow,
  handleDeleteRow,
}) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={`column${index}`}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  { column.label }
                </TableCell>
              ))}

              <TableCell align="left" style={{ minWidth: 100 }}>
                <IconButton onClick={handleAddRow}>
                  <AddIcon color="primary" />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRows.map((row, rowIndex) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={`row${rowIndex}`}>
                  {columns.map((column, columnIndex) => {
                    const value = row[column.id];

                    return (
                      <TableCell key={`row${rowIndex}-column${columnIndex}`} align={column.align}>
                        {<>
                          {
                            column.format && typeof value === 'number' ?
                              column.format(value) :
                              value
                          }
                        </>}
                      </TableCell>
                    )
                  })}

                  <TableCell>
                    <IconButton onClick={() => handleEditRow(row.id)}>
                      <EditIcon className={classes.editButton} />
                    </IconButton>
                    <IconButton  onClick={() => handleDeleteRow(row.id)}>
                      <DeleteIcon className={classes.deleteButton} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}