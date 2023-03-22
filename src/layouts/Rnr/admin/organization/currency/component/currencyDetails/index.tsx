import { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Settings page components

import FormField from "rnrComponents/sharedComponent/FormField";

import Switch from "@mui/material/Switch";


function CurrencyDetails({ formData }: any): JSX.Element {
  
  const { formField, values, errors, touched } = formData;
  const {
    currencyName,
    currencySymbol,
    DecimalPrecisionName,
    decimalPrecisionSymbol,
    CurrencyScaleType,
    isPrefixSymbol,
    inactive,
    isExchangeCurrency,
  } = formField;
  let {
    currencyName: currencyNameV,
    currencySymbol: currencySymbolV,
    DecimalPrecisionName: DecimalPrecisionNameV,
    decimalPrecisionSymbol: decimalPrecisionSymbolV,
    CurrencyScaleType: CurrencyScaleTypeV,
  } = values;
  const [isPrefixSymbolV, setIsPrefixSymbolV] = useState<boolean>(false);
  const [inactiveV, setInactiveV] = useState<boolean>(false);
  const [isExchangeCurrencyV, setIsExchangeCurrencyV] = useState<boolean>(false);

  const handleSetIsPrefixSymbolV = () => setIsPrefixSymbolV(!isPrefixSymbolV);
  const handleSetInactiveV = () => setInactiveV(!inactiveV);
  const handleSetIsExchangeCurrencyV = () => setIsExchangeCurrencyV(!isExchangeCurrencyV);
  return (
    <>
      <MDBox p={3}>
        <MDTypography variant="body">Currency Details</MDTypography>
      </MDBox>
      <MDBox component="form" pb={3} px={3}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={currencyName.type}
              label={currencyName.label}
              name={currencyName.name}
              value={currencyNameV}
              placeholder={currencyName.placeholder}
              error={errors.currencyName && touched.currencyName}
              success={currencyNameV.length > 0 && !errors.currencyName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={currencySymbol.type}
              label={currencySymbol.label}
              name={currencySymbol.name}
              value={currencySymbolV}
              placeholder={currencySymbol.placeholder}
              error={errors.currencySymbol && touched.currencySymbol}
              success={currencySymbolV.length > 0 && !errors.currencySymbol}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={DecimalPrecisionName.type}
              label={DecimalPrecisionName.label}
              name={DecimalPrecisionName.name}
              value={DecimalPrecisionNameV}
              placeholder={DecimalPrecisionName.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label={decimalPrecisionSymbol.label}
              type={decimalPrecisionSymbol.type}
              name={decimalPrecisionSymbol.name}
              value={decimalPrecisionSymbolV}
              placeholder={decimalPrecisionSymbol.placeholder}
              error={errors.decimalPrecisionSymbol && touched.decimalPrecisionSymbol}
              success={decimalPrecisionSymbolV.length > 0 && !errors.decimalPrecisionSymbol}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Autocomplete
              defaultValue=""
              options={CurrencyScaleType.options}
              value={CurrencyScaleTypeV}
              renderInput={(params) => (
                <FormField
                  {...params}
                  label={CurrencyScaleType.label}
                  name={CurrencyScaleType.name}
                  value={CurrencyScaleTypeV}
                  placeholder={CurrencyScaleType.placeholder}
                  error={errors.CurrencyScaleType && touched.CurrencyScaleType}
                  success={CurrencyScaleTypeV.length > 0 && !errors.CurrencyScaleType}
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </Grid>
          <MDBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <MDBox lineHeight={0} mx={2}>
              <MDTypography variant="button" color="text">
                {isPrefixSymbol.label}
              </MDTypography>
            </MDBox>
            <MDBox mr={1}>
              <Switch checked={isPrefixSymbolV} onChange={handleSetIsPrefixSymbolV} />
            </MDBox>
          </MDBox>
          <MDBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <MDBox lineHeight={0} mx={2}>
              <MDTypography variant="button" color="text">
                {inactive.label}
              </MDTypography>
            </MDBox>
            <MDBox mr={1}>
              <Switch checked={inactiveV}  onChange={handleSetInactiveV}/>
            </MDBox>
          </MDBox>
          <MDBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <MDBox lineHeight={0} mx={2}>
              <MDTypography variant="button" color="text">
                {isExchangeCurrency.label}
              </MDTypography>
            </MDBox>
            <MDBox mr={1}>
              <Switch checked={isExchangeCurrencyV}  onChange={handleSetIsExchangeCurrencyV}/>
            </MDBox>
          </MDBox>
          
          
        </Grid>
      </MDBox>
    </>
  );
}

export default CurrencyDetails;
