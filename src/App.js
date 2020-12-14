import React from 'react';
import AppBar from './composition/AppBar';
import Filter from './composition/Filter';
import TableComp from "./composition/TableComp"
import "./scss/styles.scss"

function App() {

  return (
    <div className="container">
      <AppBar />
      <div className="main">
        <Filter/>
        <TableComp />
      </div>
    </div>
  );
}

export default App;
