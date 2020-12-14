import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import "../scss/styles.scss"
import IconButton from '@material-ui/core/IconButton';

import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons'

const AddButton = <IconButton> <AddIcon /> </IconButton> // TODO: connect with ADD Modal

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
    label: AddButton,
    minWidth: 100,
    align: 'right',
  },
];

function createData(id, title, state, url, created, updated) {
  return { id, title, state, url, created, updated, plusbutton: id };
}

var buttonIcon = `<Button variant="contained" color="primary">
Hello World
</Button>`

const rows = [
  createData('123456', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123456', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123456', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123456', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),
  createData('123456', 'fix(dev-infra): add vim .swp files to gitignore', "open", "https://api.github.com/repos/angular/angular/issues/40094","2020-12-11T20:33:06Z","2020-12-11T20:33:06Z"),

];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.title}>
                  {columns.map((column) => {
                    const value = row[column.id];

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {
                          column.id === 'plusbutton' ?
                            <>
                              <IconButton>
                                <EditIcon />
                              </IconButton>
                              <IconButton>
                                <DeleteIcon />
                              </IconButton>
                            </> :
                            <>
                              {
                                column.format && typeof value === 'number' ? column.format(value) : value
                              }
                            </>
                        }
                      </TableCell>
                    )
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}