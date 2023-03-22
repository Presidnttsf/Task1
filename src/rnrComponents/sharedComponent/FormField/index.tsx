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

// formik components
import { ErrorMessage, Field, Formik, Form, } from "formik";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
//import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";



// Declaring props types for FormField
interface Props {
  label: string;
  name: string;
  [key: string]: any;
}

// const CustomizedSelectForFormik = ({ children, Form, Field }) => {
//   const { name, value } = Field;
//   const { setFieldValue } = Form;

//   return (
//     <Select
//       name={name}
//       value={value}
//       onChange={e => {
//         setFieldValue(name, e.target.value);
//       }}
//     >
//       {children}
//     </Select>
//   );
// };


function FormField({ label, name, ...rest }: Props): JSX.Element {
  console.log(rest)
  return (
    <MDBox>
      {rest.type === "select" ?

        <FormControl sx={{ m: 1, pr: 1 }} fullWidth>
          <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
          <Select
            value={rest.value}
            onChange={rest.onchange}
            label={rest.label}
            variant="standard"
            fullWidth

          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {rest.option.map((data: any) => {
              return (
                <MenuItem value={data}>{data}</MenuItem>
              )

            })}

          </Select>
        </FormControl>



        :
        <Field {...rest} name={name} as={MDInput} variant="standard" label={label} fullWidth />}



      <MDBox>
        <MDTypography component="div" variant="caption" color="error" fontWeight="regular">
          {(<ErrorMessage name={name} />) as any}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

export default FormField;
