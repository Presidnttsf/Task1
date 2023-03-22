
// RNR Dashboard Layout 
import { useEffect, ReactNode } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";
import { useMaterialUIController, setLayout } from "context";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";

function RnrDashboardLayout({ children }: { children: ReactNode }): JSX.Element {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, layout } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "rnr_dashboard");
  }, [pathname]);

  return (
    <>
      {layout === "dashboard" && (
        <MDBox
          sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
            p: 3,
            position: "relative",

            [breakpoints.up("xl")]: {
              marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
              transition: transitions.create(["margin-left", "margin-right"], {
                easing: transitions.easing.easeInOut,
                duration: transitions.duration.standard,
              }),
            },
          })}
        >
          {children}
        </MDBox>
      )}

      {layout === "rnr_dashboard" && (
        <MDBox
          width="100%"
          height="100%"
          minHeight="100vh"
          padding="1rem"
          sx={{ overflowX: "hidden" }}
        >
          {children}
        </MDBox>
      )}
    </>

  );
}

export default RnrDashboardLayout;
