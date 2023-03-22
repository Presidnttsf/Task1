import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Link from '@mui/material/Link';

function MDAutocomplete(props : any) {
    const [optionsData, setOptionsData] = useState<any>("");

    useEffect(() => {
        setOptionsData(props.data);
    },[props])

    return (
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 400 }}
          options={optionsData}
          autoHighlight
          getOptionLabel={(option: any) => option?.name}
          renderOption={(props, option : any) => (
            <Box
              component="li"
              {...props}
            >
              <Link href={option.route}>{option.name} </Link>
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Menu"
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
        />
      );
}

export default MDAutocomplete