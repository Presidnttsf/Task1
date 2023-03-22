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

// react-router-dom components
import { Link } from "react-router-dom";
import { useMaterialUIController } from "context";

// @mui material components
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";
import { Theme } from "@mui/material/styles";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Declaring props types for DefaultNavbarDropdown
interface Props {
  name: string;
  icon?: ReactNode;
  children?: ReactNode;
  collapseStatus?: boolean;
  light?: boolean;
  href?: string;
  route?: string;
  collapse: boolean;
  [key: string]: any;
}

function DefaultNavbarDropdown({
  name,
  icon,
  children,
  collapseStatus,
  light,
  href,
  route,
  active,
  collapse,
  ...rest
}: Props): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode, transparentSidenav, whiteSidenav, sidenavColor } = controller;

  const linkComponent = {
    component: "a",
    href,
    target: "_blank",
    rel: "noreferrer",
  };

  const routeComponent: any = {
    component: Link,
    to: route,
  };

  return (
    <>
      <MDBox
        {...rest}
        mx={1}
        p={1}
        display="flex"
        alignItems="baseline"
        color={light ? "white" : "dark"}
        opacity={light ? 1 : 0.6}
        sx={({ palette, functions: { rgba, },  borders: { borderRadius }, transitions }: Theme) => 
            ({ 
              cursor: "pointer", 
              userSelect: "none",
              borderRadius: borderRadius.md,
              "&:hover, &:focus": {
                backgroundColor: () => {
                  let { grey, white } = palette;
                  return transparentSidenav && !darkMode
                    ? grey[300]
                    : rgba(whiteSidenav ? grey[400] : white.main, 0.2);
                }
              },
              backgroundColor: () => {
                let { grey, white, transparent, info } = palette;
                let backgroundValue = transparent.main;
        
                if (
                  (active === "isParent" && !transparentSidenav && !whiteSidenav) ||
                  (active === "isParent" && transparentSidenav && darkMode)
                ) {
                  backgroundValue = rgba(white.main, 0.2);
                } else if (active === "isParent" && transparentSidenav) {
                  backgroundValue = grey[300];
                } else if (active === "isParent" && whiteSidenav) {
                  backgroundValue = grey[200];
                } else if (active) {
                  backgroundValue = info.main;
                }
                return backgroundValue;
              },
              transition: transitions.create("background-color", {
                easing: transitions.easing.easeInOut,
                duration: transitions.duration.shorter,
              }),
            })
          }
        {...(route && routeComponent)}
        {...(href && linkComponent)}
      >
        <MDTypography
          variant="body2"
          lineHeight={1}
          color="inherit"
          sx={({ palette: { dark, white }}: Theme) => 
              ({ 
                alignSelf: "center", 
                color:(transparentSidenav && !darkMode) || whiteSidenav ? dark.main : white.main,
                "& *": { verticalAlign: "middle" } })}
        >
          {icon}
        </MDTypography>
        <MDTypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          sx={ ({ palette: { dark, white } }: Theme) => 
                ({ 
                  fontWeight: "100%", 
                  ml: 1, 
                  mr: 0.25,
                  color:(transparentSidenav && !darkMode) || whiteSidenav ? dark.main : white.main
                })}
        >
          {name}
        </MDTypography>
        <MDTypography 
            variant="body2" 
            // color={light ? "white" : "dark"} 
            ml="auto"
            sx={({ palette: { dark, white }}: Theme) => 
            ({ 
              color:(transparentSidenav && !darkMode) || whiteSidenav ? dark.main : white.main,
             })}
          >
          <Icon sx={{ fontWeight: "normal", verticalAlign: "middle" }}>
            {collapse && "keyboard_arrow_down"}
          </Icon>
        </MDTypography>
      </MDBox>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Declaring default props for DefaultNavbarDropdown
DefaultNavbarDropdown.defaultProps = {
  icon: false,
  children: false,
  collapseStatus: false,
  light: false,
  href: "",
  route: "",
};

export default DefaultNavbarDropdown;
