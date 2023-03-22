import { useState } from "react";


import RnrDataTable from "rnrComponents/sharedComponent/RnrDataTable";
// Data
import dataTableData from "layouts/Rnr/admin/organization/currency/component/currencyDenomination/dataTableData";

function CurrencyDenomination(): JSX.Element {
  
    return (
        <RnrDataTable
        table={dataTableData} 
        addRow
        />
    );
}
export default CurrencyDenomination;