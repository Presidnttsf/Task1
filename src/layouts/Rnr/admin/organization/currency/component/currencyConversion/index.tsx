import { useState } from "react";


import RnrDataTable from "rnrComponents/sharedComponent/RnrDataTable";
// Data
import dataTableData from "layouts/Rnr/admin/organization/currency/component/currencyConversion/dataTableData";

function CurrencyConversion(): JSX.Element {
  
    return (
        <RnrDataTable
        table={dataTableData} 
        addRow
        />
    );
}
export default CurrencyConversion;