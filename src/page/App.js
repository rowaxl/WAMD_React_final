import React from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import TableComp from "../components/TableComp"
import "../scss/styles.scss"

function App() {

  return (
    <div className="container">
      <Header />

      <div className="main">
        <Filter/>
        <TableComp />
      </div>

    </div>
  );
}

export default App;
