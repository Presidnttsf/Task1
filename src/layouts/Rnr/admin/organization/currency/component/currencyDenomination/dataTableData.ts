/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const dataTableData = {
  columns: [
    { Header: "Denomination Name", accessor: "denominationName" , width: "20%"},
    { Header: "Denomination Details", accessor: "denominationDetails" , width: "20%"},
    { Header: "Denomination Value", accessor: "denominationValue" , width: "20%"},
    { Header: "Denomination Sequence", accessor: "denominationSequence", width: "20%" },
    { Header: "Is InActive", accessor: "sInActive" , width: "20%"},
  ],

  rows: [{}],
};

export default dataTableData;