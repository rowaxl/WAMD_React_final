import React from 'react';
import Header from './composition/Header';
import Filter from './composition/Filter';
import TableComp from "./composition/TableComp"
import "./scss/styles.scss"

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
