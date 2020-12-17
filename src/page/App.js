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
  const [modalData, setModalData] = useState(null)

  const handleAddRow = () => {
    setModalMode("add")
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
    // TODO: idが一致する行を探す
    // TODO: 探した行のデータ（タイトルなど）をモーダルで表示する
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleSubmit = (data) => {
    // TODO: modalMode === 'delete'だったら、dispatch(deleteRow(data.id))を実行する

    switch (modalMode) {
      case 'add': {
        dispatch(addRow(data))
        break
      }
      case 'edit': {
        dispatch(editRow(data))
        break
      }
      default:
        break
    }

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
          data={modalData}
          handleSubmit={handleSubmit}
          handleClose={handleCloseModal}
        />
      </div>

    </div>
  );
}

export default App;
