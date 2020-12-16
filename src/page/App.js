import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Header from '../components/Header';
import Filter from '../components/Filter';
import TableComp from "../components/TableComp"
import Modal from "../components/Modal"
import {addRow, editRow, deleteRow} from "../reducer/actions"

import "../scss/styles.scss"

function App() {
  const dispatch = useDispatch()
  const dataRows = useSelector(state => state.dataRows)
  const [openModal, setOpenModal] = useState(false)
  const [modalMode, setModalMode] = useState('add')

  const handleAddRow = () => {
      setModalMode("add")
      setOpenModal(true)
  }

  const handleEditRow = (id) => {
    console.log("handleEditRow")

  }

  const handleDeleteRow = (id) => {
    console.log("handleDeleteRow")

  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleSubmit = (data) => {
    // TODO: do change and exec actions by mode
    console.log(data)
    dispatch(addRow(data))
    setOpenModal(false)
  }

  return (
    <div className="container">
      <Header />

      <div className="main">
        <Filter/>
        <TableComp
          dataRows={dataRows}
          handleAddRow={handleAddRow}
          handleEditRow={handleEditRow}
          handleDeleteRow={handleDeleteRow}
        />

        <Modal
          open={openModal}
          mode={modalMode}
          handleSubmit={handleSubmit}
          handleClose={handleCloseModal}
        />
      </div>

    </div>
  );
}

export default App;
