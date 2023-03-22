import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Formik, Form } from "formik";

// Settings page components

import FormField from "rnrComponents/sharedComponent/FormField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useState } from "react";

function GeneralDetails({ formData }: any): JSX.Element {
  const { formField, values, errors, touched } = formData;
  const { code, name, description, noOfDecimalPrecision, culture } = formField;
 // const [noOfDecimalPrecisionV, setNoOfDecimalPrecisionV] = useState("");
  const [cultureV, setCultureV] = useState("");
  const {
    code: codeV,
    name: nameV,
    description: descriptionV,
    noOfDecimalPrecision:noOfDecimalPrecisionV,
  } = values;
  // const handleNoOfDecimalPrecisionV =  (event: SelectChangeEvent) => {
  //   setNoOfDecimalPrecisionV(event.target.value as string);
  // }
  
  const handleCultureV = (event: SelectChangeEvent) => {
    setCultureV(event.target.value as string);
  };
  return (
    <>
      <MDBox p={3}>
        <MDTypography variant="body">General Details</MDTypography>
      </MDBox>
      <MDBox component="form" pb={3} px={3}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={code.type}
              label={code.label}
              name={code.name}
              value={codeV}
              placeholder={code.placeholder}
              error={errors.code && touched.code}
              success={codeV.length > 0 && !errors.code}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={name.type}
              label={name.label}
              name={name.name}
              value={nameV}
              placeholder={name.placeholder}
              error={errors.name && touched.name}
              success={nameV.length > 0 && !errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormField
              type={description.type}
              label={description.label}
              name={description.name}
              value={descriptionV}
              placeholder={description.placeholder}
              multiline rows={2}
            />
          </Grid>
          <Grid item xs={12} sm={6}>


          {/* <FormField
              type={noOfDecimalPrecision.type}
              label={noOfDecimalPrecision.label}
              name={noOfDecimalPrecision.name}
              option={noOfDecimalPrecision.options}
              value={noOfDecimalPrecisionV}
              placeholder={noOfDecimalPrecision.placeholder}
              //onChange={handleNoOfDecimalPrecisionV}
              //onChange={formik.handleChange}
              error={errors.noOfDecimalPrecision && touched.noOfDecimalPrecision}
              success={noOfDecimalPrecisionV.length > 0 && !errors.noOfDecimalPrecision}
              
            /> */}

            {/* <FormControl variant="standard" sx={{ m: 1, pr:1 }} fullWidth>
              <InputLabel id="demo-simple-select-standard-label">{noOfDecimalPrecision.label}</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={noOfDecimalPrecisionV}
                onChange={handleNoOfDecimalPrecisionV}
                label={noOfDecimalPrecision.label}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {noOfDecimalPrecision.options.map((data: any) => {
                  return(
                    <MenuItem value={data}>{data}</MenuItem>
                  )
                 
                })}

              </Select>
            </FormControl> */}

          </Grid>
          <Grid item xs={12} sm={6}>

          <FormControl variant="standard" sx={{ m: 1, pr:1 }} fullWidth>
              <InputLabel id="demo-simple-select-standard-label">{culture.label}</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={cultureV}
                onChange={handleCultureV}
                label={culture.label}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {culture.options.map((data: any) => {
                  return(
                    <MenuItem value={data}>{data}</MenuItem>
                  )
                 
                })}

              </Select>
            </FormControl>
          </Grid>

        </Grid>
      </MDBox>
    </>


  );
}

export default GeneralDetails;
