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

  const [filteredRows, setFilteredRows] = useState(dataRows)
  const [openModal, setOpenModal] = useState(false)
  const [modalMode, setModalMode] = useState('add')
  const [modalData, setModalData] = useState(null)

  const handleAddRow = () => {
    setModalMode("add")

    setModalData(null)
    setOpenModal(true)
  }

  const handleEditRow = (id) => {
    setModalMode("edit")

    const target = dataRows.find(row => row.id === id)
    setModalData(target)

    setOpenModal(true)
  }

  const handleDeleteRow = (id) => {
    setModalMode("delete")

    const target = dataRows.find(row => row.id === id)
    setModalData(target)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleSubmit = (data) => {
    switch (modalMode) {
      case 'add': {
        dispatch(addRow(data))
        break
      }
      case 'edit': {
        dispatch(editRow(data))
        break
      }
      case "delete":{
        dispatch(deleteRow(data.id))
        break
      }
      default:
        break
    }

    setOpenModal(false)
  }

  const handleFilterChange = (text) => {
    if (!text) {
      setFilteredRows(dataRows)
      return
    }

    const regex = new RegExp(text, 'i')
    const filtered = dataRows.filter(row => regex.test(row.title))
    setFilteredRows(filtered)
  }

  const handleReload = () => {
    setFilteredRows([])
  
    setTimeout(() => {
      setFilteredRows(dataRows)
    }, 1000)
  }

  return (
    <div className="container">
      <Header handleReload={handleReload} />

      <div className="main">
        <Filter handleFilterChange={handleFilterChange} />

        <TableComp
          dataRows={filteredRows}
          handleAddRow={handleAddRow}
          handleEditRow={handleEditRow}
          handleDeleteRow={handleDeleteRow}
        />

        <Modal
          open={openModal}
          mode={modalMode}
          data={modalData}
          handleSubmit={handleSubmit}
          handleClose={handleCloseModal}
        />
      </div>

    </div>
  );
}

export default App;
