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

import checkout from "layouts/Rnr/admin/organization/currency/schemas/form";

const {
  formField: {
    code,
    name,
    description,
    noOfDecimalPrecision,
    culture,
    currencyName,
    currencySymbol,
    DecimalPrecisionName,
    decimalPrecisionSymbol,
    CurrencyScaleType,
    isPrefixSymbol,
    inactive,
    isExchangeCurrency
  },
} = checkout;

const initialValues = {
  [code.name]: "",
  [name.name]: "",
  [description.name]: "",
  [noOfDecimalPrecision.name]: "",
  [culture.name]: "",
  [currencyName.name]: "",
  [currencySymbol.name]: "",
  [DecimalPrecisionName.name]: "",
  [decimalPrecisionSymbol.name]: "",
  [CurrencyScaleType.name]: "",
  [isPrefixSymbol.name]: false,
  [inactive.name]:false,
  [isExchangeCurrency.name]: false
};

export default initialValues;
