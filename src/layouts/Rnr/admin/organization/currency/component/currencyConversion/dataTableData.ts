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
    { Header: "Company", accessor: "company" , width: "17%"},
    { Header: "Object Type", accessor: "objectType" , width: "16%"},
    { Header: "To Currency", accessor: "toCurrency" , width: "16%"},
    { Header: "Exchange Rate", accessor: "exchangeRate", width: "16%"},
    { Header: "From Date", accessor: "fromDate" , width: "16%"},
    { Header: "To Date", accessor: "toDate" , width: "16%"},
  ],

  rows: [{}]
};

export default dataTableData;
