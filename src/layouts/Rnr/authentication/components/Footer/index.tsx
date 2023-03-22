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

// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import { Theme } from "@mui/material/styles";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React TS Base Styles
import typography from "assets/theme/base/typography";

function Footer({ light }: { light?: boolean }): JSX.Element {
  const { size } = typography;

  return (
    <MDBox position="absolute" width="100%" bottom={0} paddingLeft={10}>
      <Container>
        <MDBox
          width="100%"
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          alignItems="center"
          px={1.5}
          justifyContent="center"
        >
          <MDBox
          display="flex"
          justifyContent="right"
          alignItems="right"
          textAlign="right"
          flexWrap="wrap"
          color={light ? "white" : "text"}
          fontSize={size.sm}
          borderRight="1px solid"
          pr={2}
          >
            INDIA <br />
RnR Datalex Pvt. Ltd<br />
               101, Infotech Tower, IT Park,<br />
               Nagpur -440022, MH, India.<br />
               T: +91 712 645 1259 
          </MDBox>
          <MDBox
          display="flex"
          justifyContent="left"
          alignItems="left"
          flexWrap="wrap"
          color={light ? "white" : "text"}
          fontSize={size.sm}
          pl={2}
          >UAE<br />
RnR Datalex LLC<br />
               P. O. Box : 5004878,<br />
               Dubai, United Arab Emirates.<br />
               T: +971 56 834 3527
          </MDBox>
          {/* <MDBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            color={light ? "white" : "text"}
            fontSize={size.sm}
          >
            &copy; {new Date().getFullYear()}, made with
            <MDBox fontSize={size.md} color={light ? "white" : "dark"} mb={-0.5} mx={0.25}>
              <Icon color="inherit" fontSize="inherit">
                favorite
              </Icon>
            </MDBox>
            by
            <Link href="https://www.creative-tim.com/" target="_blank">
              <MDTypography variant="button" fontWeight="medium" color={light ? "white" : "dark"}>
                &nbsp;Creative Tim&nbsp;
              </MDTypography>
            </Link>
            for a better web.
          </MDBox>
          <MDBox
            component="ul"
            sx={({ breakpoints }: Theme) => ({
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              listStyle: "none",
              mt: 3,
              mb: 0,
              p: 0,

              [breakpoints.up("lg")]: {
                mt: 0,
              },
            })}
          >
            <MDBox component="li" pr={2} lineHeight={1}>
              <Link href="https://www.creative-tim.com/" target="_blank">
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  Creative Tim
                </MDTypography>
              </Link>
            </MDBox>
            <MDBox component="li" px={2} lineHeight={1}>
              <Link href="https://www.creative-tim.com/presentation" target="_blank">
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  About Us
                </MDTypography>
              </Link>
            </MDBox>
            <MDBox component="li" px={2} lineHeight={1}>
              <Link href="https://www.creative-tim.com/blog" target="_blank">
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  Blog
                </MDTypography>
              </Link>
            </MDBox>
            <MDBox component="li" pl={2} lineHeight={1}>
              <Link href="https://www.creative-tim.com/license" target="_blank">
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  License
                </MDTypography>
              </Link>
            </MDBox>
          </MDBox> */}
        </MDBox>
      </Container>
    </MDBox>
  );
}

// Declaring default props for Footer
Footer.defaultProps = {
  light: false,
};

export default Footer;
