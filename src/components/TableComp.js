import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Modal from "./Modal";

import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons'

import { addRow, editRow, deleteRow } from '../reducer/actions'

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

export default function StickyHeadTable() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const dataRows = useSelector(state => state.dataRows);

  const handleAdd = () => {
    dispatch(addRow({
      id: Date.now(),
      title: `PR #${Date.now()}`,
      state: 'open',
      url: `https://api.github.com/repos/angular/angular/issues/${ Date.now() }`,
      created: new Date().toISOString(),
      updated: new Date().toISOString()
    })) // TODO: move to submit in ADD modal
  }

  const handleEdit = (id) => {
    const dummy = dataRows.find(row => row.id === id)
    dispatch(editRow({
      id,
      title: dummy.title,
      state: 'close',
      url: dummy.url,
      created: dummy.created,
      updated: new Date().toISOString()
    })) // TODO: move to submit in EDIT modal
  }

  const handleDelete = (id) => {
    dispatch(deleteRow(id)) // TODO: move to submit in DELETE modal
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  { column.label }
                </TableCell>
              ))}

              <TableCell align="left" style={{ minWidth: 100 }}>
                <IconButton onClick={handleAdd}>
                  <AddIcon color="primary" />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRows.map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];

                    return (
                      <TableCell key={column.id} align={column.align}>
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
                    <IconButton onClick={() => handleEdit(row.id)}>
                      <EditIcon className={classes.editButton} />
                    </IconButton>
                    <IconButton  onClick={() => handleDelete(row.id)}>
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