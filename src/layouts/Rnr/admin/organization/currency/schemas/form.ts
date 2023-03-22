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

const form = {
  formId: "new-currency-form",
  formField: {
    code: {
      name: "code",
      label: "Code",
      type: "text",
      errorMsg: "Code is required.",
    },
    name: {
      name: "name",
      label: "Name",
      type: "text",
      errorMsg: "Name is required.",
    },
    description: {
      name: "description",
      label: "Description",
      type: "text",
    },
    noOfDecimalPrecision: {
      name: "noOfDecimalPrecision",
      label: "No. of Decimal Precision",
      type: "select",
      options: ["1","2","3"],
      errorMsg: "No. of Decimal Precision is required."
    },
    culture: {
      name: "culture",
      label: "Culture",
      type: "select",
      options: ["en-IN","en-US"],
      errorMsg: "Culture is required."
    },
    currencyName: {
      name: "currencyName",
      label: "Currency Name",
      type: "text",
      errorMsg: "Currency Name is required."
    },
    currencySymbol: {
      name: "currencySymbol",
      label: "Currency Symbol",
      type: "text",
      errorMsg: "Currency Symbol is required.",
    },
    DecimalPrecisionName: {
      name: "DecimalPrecisionName",
      label: "Decimal Precision Name",
      type: "text",
      errorMsg: "Decimal Precision Name is required.",
    },
    decimalPrecisionSymbol: {
      name: "decimalPrecisionSymbol",
      label: "Decimal Precision Symbol",
      type: "text"
    },
    CurrencyScaleType: {
      name: "CurrencyScaleType",
      label: "Currency Scale Type",
      type: "select",
      options: ["Europe","India","Long","Short","US Dollar"],
      errorMsg: "Currency Scale Type is required.",
    },
    isPrefixSymbol: {
      name: "isPrefixSymbol",
      label: "Is Prefix Symbol",
      type: "text"
    },
    inactive: {
      name: "inactive",
      label: "Inactive",
      type: "text",
    },
    isExchangeCurrency: {
      name: "isExchangeCurrency",
      label: "Is Exchange Currency",
      type: "text",
    }
  },
};

export default form;
