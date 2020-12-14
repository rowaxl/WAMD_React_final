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
  { id: 'title', label: 'Title', minWidth: 100 },
  {
    id: 'state',
    label: 'state',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'url',
    label: 'url',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'created',
    label: 'Created at',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'updated',
    label: 'Updated at',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'plusbutton',
    minWidth: 100,
    align: 'right',
  },
];

function createData(id, title, state, url, created, updated) {
  return { id, title, state, url, created, updated, plusbutton: id };
}

const rows = [
  createData('123456', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123457', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123458', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123459', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123460', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123461', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123462', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123463', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123464', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123465', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123466', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123467', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123468', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123469', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123470', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123471', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123472', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
];

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 960,
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

  const handleAdd = () => {
    console.log('add new row')
  }

  const handleEdit = (id) => {
    console.log('edit ', id);
  }

  const handleDelete = (id) => {
    console.log('delete ', id)
  }

  const AddButton = (
    <IconButton onClick={handleAdd}>
      <AddIcon color="primary" />
    </IconButton>
  ) // TODO: connect with ADD Modal

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.conatiner}>
        <Table stickyHeader size="small" aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {
                    column.id === 'plusbutton' ?
                      AddButton :
                      column.label
                  }
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {
                          column.id === 'plusbutton' ?
                            <>
                              <IconButton onClick={() => handleEdit(row.id)}>
                                <EditIcon className={classes.editButton} />
                              </IconButton>
                              <IconButton  onClick={() => handleDelete(row.id)}>
                                <DeleteIcon className={classes.deleteButton} />
                              </IconButton>
                            </> :
                            <>
                              {
                                column.format && typeof value === 'number' ?
                                  column.format(value) :
                                  value
                              }
                            </>
                        }
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}