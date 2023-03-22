import { FC, forwardRef } from "react";

// Material Dashboard 2 PRO React TS components
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { OutlinedTextFieldProps, StandardTextFieldProps } from "@mui/material";
import MDSelectRoot from "components/MDSelect/MDSelectRoot";
import { styled, Theme } from "@mui/material/styles";
interface Props extends Omit<OutlinedTextFieldProps | StandardTextFieldProps, "variant"> {
    variant?: "standard" | "outlined";
    value: any;
    label?: any;
    options: [];
    onchange:any;
  }


  const MDSelect: FC<Props | any> = forwardRef(({ error, success, disabled,  variant, options, onchange, value, label, ...rest }, ref) => {
    // <MDSelectRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />
    // const { palette, functions } = theme?: Theme; ownerState: any;

    // const { grey, transparent, error: colorError, success: colorSuccess } = palette;
debugger;
    console.log(label)
    // const { pxToRem } = functions;
    return(
        <FormControl variant={variant} sx={{ m: 1, pr:1 }} fullWidth>
    <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
    <Select
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      value={value}
      onChange={onchange}
      label={label}
      {...rest}
      ref={ref}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {options.map((data: any) => {
        return(
          <MenuItem value={data}>{data}</MenuItem>
        )
       
      })}

    </Select>
  </FormControl>
  )});
  
  // Declaring default props for MDInput
  MDSelect.defaultProps = {
    error: false,
    success: false,
    disabled: false,
  };



//   const MDSelect: FC<Props> = forwardRef(({ variant, options, onchange, value, label, ...rest }, ref) => (
//     <FormControl variant="standard" sx={{ m: 1, pr:1 }} fullWidth>
//     <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
//     <Select
//       labelId="demo-simple-select-standard-label"
//       id="demo-simple-select-standard"
//       value={value}
//       onChange={onchange}
//       label={label}
//       {...rest}
//       ref={ref}
//     >
//       <MenuItem value="">
//         <em>None</em>
//       </MenuItem>
//       {options.map((data: any) => {
//         return(
//           <MenuItem value={data}>{data}</MenuItem>
//         )
       
//       })}

//     </Select>
//   </FormControl>
//   ));

//   // Declaring default props for MDProgress
//   MDSelect.defaultProps = {
//     variant: "contained",
//     color: "info",
//     value: 0,
//     label: false,
//   };
  
//   export default MDSelect;