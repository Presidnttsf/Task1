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

import * as Yup from "yup";
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
    isExchangeCurrency,
  },
} = checkout;

const validations = [
  Yup.object().shape({
    [code.name]: Yup.string().required(code.errorMsg),
    [name.name]: Yup.string().required(name.errorMsg),
    [noOfDecimalPrecision.name]: Yup.string().required(noOfDecimalPrecision.errorMsg),
    [culture.name]: Yup.string().required(culture.errorMsg),
    [currencyName.name]: Yup.string().required(currencyName.errorMsg),
    [currencySymbol.name]: Yup.string().required(currencySymbol.errorMsg),
    [DecimalPrecisionName.name]: Yup.string().required(DecimalPrecisionName.errorMsg),
    [CurrencyScaleType.name]: Yup.string().required(CurrencyScaleType.errorMsg),
  }),
];

export default validations;
