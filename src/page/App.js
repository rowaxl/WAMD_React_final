import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Header from '../components/Header';
import Filter from '../components/Filter';
import TableComp from "../components/TableComp"
import Modal from "../components/Modal"

import "../scss/styles.scss"

function App() {
  const dispatch = useDispatch()
  const dataRows = useSelector(state => state.dataRows)
  const [openModal, setOpenModal] = useState(false)
  const [modalMode, setModalMode] = useState('add')

  const handleAddRow = () => {

  }

  const handleEditRow = (id) => {

  }

  const handleDeleteRow = (id) => {

  }

  const handleCloseModal = () => {
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
          handleClose={handleCloseModal}
          mode={modalMode}
        />
      </div>

    </div>
  );
}

export default App;
