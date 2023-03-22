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

import { ReactNode } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import { Theme } from "@mui/material/styles";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React TS examples components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/Rnr/authentication/components/Footer";

// Material Dashboard 2 PRO React page layout routes
import pageRoutes from "page.routes";

// Declaring props types for CoverLayout
interface Props {
  coverHeight?: string;
  imageBg: string;
  children: ReactNode;
  sideImage: string;
  logo: string;
}

function CoverLayout({ coverHeight, imageBg, children, sideImage, logo }: Props): JSX.Element {
  return (
    <PageLayout>
      {/* <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://creative-tim.com/product/material-dashboard-2-pro-react-ts",
          label: "buy now",
          color: "info",
        }}
        transparent
        light
      /> */}
      <MDBox
        width="100%"
        minHeight={coverHeight}
        borderRadius="xl"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }: Theme) => imageBg && `url(${imageBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MDBox mt={{ xs: -80, lg: -80 }} px={1} width="calc(100% - 2rem)" mx="auto">
        <Grid container spacing={1} justifyContent="right">
          <Grid item xs={0} sm={0} md={6} lg={6} xl={6}>
            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={0} sm={0} md={12} lg={12} xl={12} justifyContent="center">
                <MDBox
                  component="img"
                  src={logo}
                  alt="img"
                  borderRadius="lg"
                  sx={{
                    paddingLeft: "140px",
                  }}
                  width="70%"
                  height="70%"
                />
              </Grid>
              <Grid item xs={0} sm={0} md={12} lg={12} xl={12} justifyContent="center">
                <MDBox
                  component="img"
                  src={sideImage}
                  alt="img"
                  borderRadius="lg"
                  sx={{
                    paddingLeft: "140px",
                  }}
                  width="85%"
                  height="85%"
                />
              </Grid>
              <Footer />
            </Grid>
          </Grid>
          <Grid item xs={11} sm={10} md={6} lg={6} xl={6} mt={5}>
            <div style={{ padding: "0px 100px 0px 100px" }}>{children}</div>
          </Grid>
        </Grid>
      </MDBox>
    </PageLayout>
  );
}

// Declaring default props for CoverLayout
CoverLayout.defaultProps = {
  coverHeight: "100vh",
};

export default CoverLayout;
