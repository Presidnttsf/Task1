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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/Rnr/authentication/components/CoverLayout";

// Images
import bgImage from "rnrAssets/img/login_bg.jpg";
import sideImage from "rnrAssets/img/erp-features.png";
import logo from "rnrAssets/img/rujul-logo-login.png";
import { Autocomplete } from "@mui/material";

function Cover(): JSX.Element {
  const [rememberMe, setRememberMe] = useState<boolean>(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <CoverLayout imageBg={bgImage} sideImage={sideImage} logo={logo}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Log in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                placeholder="john@example.com"
                InputLabelProps={{ shrink: true }}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                placeholder="************"
                InputLabelProps={{ shrink: true }}
              />
            </MDBox>
            <MDBox mb={2}>
              <Autocomplete
                options={["Company 1", "Company 2", "Company 3"]}
                renderInput={(params) => (
                  <MDInput {...params} variant="standard" label="Select Company" />
                )}
              />
            </MDBox>
            <MDBox mb={2}>
              <Autocomplete
                options={["Branch 1", "Branch 2", "Branch 3"]}
                renderInput={(params) => (
                  <MDInput {...params} variant="standard" label="Select Branch" />
                )}
              />
            </MDBox>

            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={2} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                component={Link}
                to="/dashboards/analytics"
                fullWidth
              >
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={1} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Forget password?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/reset-password-mail"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Click here
                </MDTypography>
              </MDTypography>
            </MDBox>
            <MDBox mt={1} mb={1} textAlign="center">
              <MDTypography
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
                ml={4}
              >
                English{" "}
              </MDTypography>
              <MDTypography variant="button" color="text"  ml={4}>
                Arbic{" "}
              </MDTypography>
              <MDTypography variant="button" color="text"  ml={4}>Thai</MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
