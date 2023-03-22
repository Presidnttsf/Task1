import { useState, useEffect, ReactNode, Fragment } from "react";

// react-router components
import { Link, useLocation } from "react-router-dom";

// @mui material components
import Icon from "@mui/material/Icon";
import Popper from "@mui/material/Popper";
import Grow, { GrowProps } from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { Theme } from "@mui/material/styles";
import Popover from '@mui/material/Popover';

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAutocomplete from "components/MDAutocomplete";

import Utility from "assets/utils/utility";

// Material Dashboard 2 PRO React TS examples components
import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";
import NotificationItem from "examples/Items/NotificationItem";

// Material Dashboard 2 PRO React TS Base Styles
import breakpoints from "assets/theme/base/breakpoints";
// Material Dashboard 2 PRO React context
import { useMaterialUIController } from "context";

import rujulLogo from "assets/images/logos/rujul-logo.png";

// Custom styles for DashboardNavbar
import {
  navbarIconButton,
} from "examples/Navbars/DashboardNavbar/styles";

// Declaring props types for DefaultNavbar
interface Props {
  routes: {
    [key: string]:
      | ReactNode
      | string
      | {
          [key: string]: string | any;
        }[];
  }[];
  brand?: string;
  transparent?: boolean;
  light?: boolean;
  action?: {
    type: "external" | "internal";
    route: string;
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light";
    label: string;
  };
  search?:boolean;
  profile?:boolean;
}

interface NewGrowTypes extends GrowProps {
  sx: any;
  [key: string]: any;
}

function NewGrow(props: NewGrowTypes) {
  return <Grow {...props} />;
}

function DefaultNavbar({ routes, brand, transparent, light, action, search, profile }: Props): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode, transparentNavbar, transparentSidenav, whiteSidenav, sidenavColor } = controller;

  const [dropdown, setDropdown] = useState<any>("");
  const [dropdownEl, setDropdownEl] = useState<any>("");
  const [dropdownName, setDropdownName] = useState<any>("");
  const [nestedDropdown, setNestedDropdown] = useState<any>("");
  const [nestedDropdownEl, setNestedDropdownEl] = useState<any>("");
  const [nestedDropdownName, setNestedDropdownName] = useState<any>("");
  const [arrowRef, setArrowRef] = useState<any>(null);
  const [mobileNavbar, setMobileNavbar] = useState<boolean>(false);
  const [mobileView, setMobileView] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<any>(false);
  const [mainMenuData, setMainMenuData] = useState<any>('');
  const [openCollapse, setOpenCollapse] = useState<boolean | string>(false);
  const [openNestedCollapse, setOpenNestedCollapse] = useState<boolean | string>(false);
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];
  const items = pathname.split("/").slice(1);
  const itemParentName = items[1];
  const itemName = items[items.length - 1];

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);
  const handleCloseMenu = () => setOpenMenu(false);
  const handleOpenMenu = (event: any) => setOpenMenu(event.currentTarget);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    setMainMenuData(Utility.menuSearch(routes));
    setOpenCollapse(collapseName);
    setOpenNestedCollapse(itemParentName);
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  const renderNavbarItems = routes.map(({ name, icon, href, route, collapse, key }: any) => (
    <DefaultNavbarDropdown
      key={name}
      name={name}
      icon={icon}
      href={href}
      route={route}
      active={key === itemParentName ? "isParent" : false}
      collapse={Boolean(collapse)}
      open={openNestedCollapse === key}
      onMouseEnter={({ currentTarget }: any) => {
        openNestedCollapse === key && currentTarget.classList.contains("MuiBox-root")
        ? setOpenNestedCollapse(false)
        : setOpenNestedCollapse(key)
        if (collapse) {
          setDropdown(currentTarget);
          setDropdownEl(currentTarget);
          setDropdownName(name);
        }
      }}
      onMouseLeave={() => collapse && setDropdown(null)}
      light={light}
    />
  ));

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
       <MDTypography component="a" href={`#`}>
          <NotificationItem   icon={<Icon>person</Icon>} title="Profile" />
      </MDTypography>
      <MDTypography component="a" href={`#`}>
          <NotificationItem icon={<Icon>link</Icon>} title="Shortcuts" />
      </MDTypography>
      <MDTypography component="a" href={`#`}>
          <NotificationItem icon={<Icon>help</Icon>} title="Help" />
      </MDTypography>
      <MDTypography component="a" href={`#`}>
          <NotificationItem icon={<Icon>logout</Icon>} title="Logout" />
      </MDTypography>
    </Menu>
  );

  // Styles for the navbar icons
  const iconsStyle = ({
    palette: { dark, white, text },
    functions: { rgba },
  }: {
    palette: any;
    functions: any;
  }) => ({
    color: () => {
      let colorValue =  (transparentSidenav && !darkMode) || whiteSidenav ? dark.main : white.main;
      return colorValue;
    },
  });

  // Render the routes on the dropdown menu
  const renderRoutes = routes.map(({ name, collapse, columns, rowsPerColumn }: any) => {
    let template;

    // Render the dropdown menu that should be display as columns
    if (collapse && columns && name === dropdownName) {
      const calculateColumns = collapse.reduce((resultArray: any, item: any, index: any) => {
        const chunkIndex = Math.floor(index / rowsPerColumn);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);

      template = (
        <Grid key={name} container spacing={3} py={1} px={1.5}>
          {calculateColumns.map((cols: any, key: any) => {
            const gridKey = `grid-${key}`;
            const dividerKey = `divider-${key}`;

            return (
              <Grid key={gridKey} item xs={12 / columns} sx={{ position: "relative" }}>
                {cols.map((col: any, index: any) => (
                  <Fragment key={col.name}>
                    <MDBox
                      width="100%"
                      display="flex"
                      alignItems="center"
                      py={1}
                      mt={index !== 0 ? 2 : 0}
                    >
                      <MDBox
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="1.5rem"
                        height="1.5rem"
                        borderRadius="md"
                        mr={1}
                        fontSize="1rem"
                        lineHeight={1}
                        sx={({ palette: { dark, white }}: Theme) => 
                        ({ 
                          color:(transparentSidenav && !darkMode) || whiteSidenav ? dark.main : white.main,
                        })}
                      >
                        {col.icon}
                      </MDBox>
                      <MDTypography
                        display="block"
                        variant="button"
                        fontWeight="bold"
                        textTransform="capitalize"
                        sx={ ({ palette: { dark, white } }: Theme) => 
                        ({ 
                          color:(transparentSidenav && !darkMode) || whiteSidenav ? dark.main : white.main
                        })}
                      >
                        {col.name}
                      </MDTypography>
                    </MDBox>
                    {col.collapse.map((item: any) => (
                      <MDTypography
                        key={item.name}
                        component={item.route ? Link : MuiLink}
                        to={item.route ? item.route : ""}
                        href={item.href ? item.href : (e: any) => e.preventDefault()}
                        target={item.href ? "_blank" : ""}
                        rel={item.href ? "noreferrer" : "noreferrer"}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        px={2}
                        sx={({ palette: { grey, dark, white }, borders: { borderRadius } }: Theme) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",
                          color:(transparentSidenav && !darkMode) || whiteSidenav ? dark.main : white.main,
                          "&:hover": {
                            backgroundColor: grey[200],
                            color: dark.main,
                          },
                        })}
                      >
                        {item.name}
                      </MDTypography>
                    ))}
                  </Fragment>
                ))}
                {key !== 0 && (
                  <Divider
                    key={dividerKey}
                    orientation="vertical"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "-4px",
                      transform: "translateY(-45%)",
                      height: "90%",
                    }}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      );

      // Render the dropdown menu that should be display as list items
    } else if (collapse && name === dropdownName) {
      template = collapse.map((item: any) => {
        const linkComponent = {
          component: MuiLink,
          href: item.href,
          target: "_blank",
          rel: "noreferrer",
        };

        const routeComponent = {
          component: Link,
          to: item.route,
        };

        return (
          <MDTypography
            key={item.name}
            {...(item.route ? routeComponent : linkComponent)}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            variant="button"
            textTransform="capitalize"
            minWidth={item.description ? "14rem" : "12rem"}
            color={item.description ? "dark" : "text"}
            fontWeight={item.description ? "bold" : "regular"}
            py={item.description ? 1 : 0.625}
            px={2}
            sx={({ palette: { grey, dark }, borders: { borderRadius } }: Theme) => ({
              borderRadius: borderRadius.md,
              cursor: "pointer",
              transition: "all 300ms linear",

              "&:hover": {
                backgroundColor: grey[200],
                color: dark.main,

                "& *": {
                  color: dark.main,
                },
              },
            })}
            onMouseEnter={({ currentTarget }: any) => {
              if (item.dropdown) {
                setNestedDropdown(currentTarget);
                setNestedDropdownEl(currentTarget);
                setNestedDropdownName(item.name);
              }
            }}
            onMouseLeave={() => {
              if (item.dropdown) {
                setNestedDropdown(null);
              }
            }}
          >
            {item.description ? (
              <MDBox display="flex" py={0.25} fontSize="1rem" color="text">
                {typeof item.icon === "string" ? (
                  <Icon color="inherit">{item.icon}</Icon>
                ) : (
                  <MDBox color="inherit">{item.icon}</MDBox>
                )}
                <MDBox pl={1} lineHeight={0}>
                  <MDTypography
                    variant="button"
                    display="block"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    {item.name}
                  </MDTypography>
                  <MDTypography variant="button" fontWeight="regular" color="text">
                    {item.description}
                  </MDTypography>
                </MDBox>
              </MDBox>
            ) : (
              <MDBox display="flex" alignItems="center" color="text">
                <Icon sx={{ mr: 1 }}>{item.icon}</Icon>
                {item.name}
              </MDBox>
            )}
            {item.collapse && (
              <Icon sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}>
                keyboard_arrow_right
              </Icon>
            )}
          </MDTypography>
        );
      });
    }

    return template;
  });

  // Routes dropdown menu
  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      popperRef={null}
      open={Boolean(dropdown)}
      placement="top-start"
      transition
      style={{ zIndex: 10 }}
      modifiers={[
        {
          name: "arrow",
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(null);
          setDropdownName("");
        }
      }}
    >
      {({ TransitionProps }) => (
        <NewGrow
          {...TransitionProps}
          sx={({
            palette: { transparent: transparentColor, white, background, gradients },
            functions: { linearGradient},
          }: any) => ({
            transformOrigin: "left top",
            background: () => {
                let backgroundValue = darkMode
                  ? background.sidenav
                  : linearGradient(gradients.dark.main, gradients.dark.state);
                 
                  if (transparentSidenav) {
                    backgroundValue = white.main;
                  } else if (whiteSidenav) {
                    backgroundValue = white.main;
                  }
                  return backgroundValue;
              }
          })}
        >
          <MDBox borderRadius="lg">
            <MDTypography variant="h1" color="white">
              <Icon 
                ref={setArrowRef} 
                style={{marginTop: "-1.5rem"}} 
                sx={({
                  palette: { transparent: white, gradients }
                }: any) => ({
                  color: () => {
                      let backgroundValue = gradients.dark.main;
      
                        if (transparentSidenav) {
                          backgroundValue = white.main;
                        } else if (whiteSidenav) {
                          backgroundValue = white.main;
                        }
                        return backgroundValue;
                    }
                })}
                >
                arrow_drop_up
              </Icon>
            </MDTypography>
            <MDBox shadow="lg" borderRadius="lg" p={1.625} mt={1}>
              {renderRoutes}
            </MDBox>
          </MDBox>
        </NewGrow>
      )}
    </Popper>
  );

  // Render routes that are nested inside the dropdown menu routes
  const renderNestedRoutes = routes.map(({ collapse, columns }: any) =>
    collapse && !columns
      ? collapse.map(({ name: parentName, collapse: nestedCollapse }: any) => {
          let template;

          if (parentName === nestedDropdownName) {
            template =
              nestedCollapse &&
              nestedCollapse.map((item: any) => {
                const linkComponent = {
                  component: MuiLink,
                  href: item.href,
                  target: "_blank",
                  rel: "noreferrer",
                };

                const routeComponent = {
                  component: Link,
                  to: item.route,
                };

                return (
                  <MDTypography
                    key={item.name}
                    {...(item.route ? routeComponent : linkComponent)}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    variant="button"
                    textTransform="capitalize"
                    minWidth={item.description ? "14rem" : "12rem"}
                    color={item.description ? "dark" : "text"}
                    fontWeight={item.description ? "bold" : "regular"}
                    py={item.description ? 1 : 0.625}
                    px={2}
                    sx={({ palette: { grey, dark }, borders: { borderRadius } }: Theme) => ({
                      borderRadius: borderRadius.md,
                      cursor: "pointer",
                      transition: "all 300ms linear",

                      "&:hover": {
                        backgroundColor: grey[200],
                        color: dark.main,

                        "& *": {
                          color: dark.main,
                        },
                      },
                    })}
                  >
                    {item.description ? (
                      <MDBox>
                        {item.name}
                        <MDTypography
                          display="block"
                          variant="button"
                          color="text"
                          fontWeight="regular"
                          sx={{ transition: "all 300ms linear" }}
                        >
                          {item.description}
                        </MDTypography>
                      </MDBox>
                    ) : (
                      item.name
                    )}
                    {item.collapse && (
                      <Icon
                        fontSize="small"
                        sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}
                      >
                        keyboard_arrow_right
                      </Icon>
                    )}
                  </MDTypography>
                );
              });
          }

          return template;
        })
      : null
  );

  // Dropdown menu for the nested dropdowns
  const nestedDropdownMenu = (
    <Popper
      anchorEl={nestedDropdown}
      popperRef={null}
      open={Boolean(nestedDropdown)}
      placement="right-start"
      transition
      style={{ zIndex: 10 }}
      onMouseEnter={() => {
        setNestedDropdown(nestedDropdownEl);
      }}
      onMouseLeave={() => {
        setNestedDropdown(null);
        setNestedDropdownName("");
        setDropdown(null);
      }}
    >
      {({ TransitionProps }) => (
        <NewGrow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }: Theme) => white.main,
          }}
        >
          <MDBox ml={2.5} mt={-2.5} borderRadius="lg">
            <MDBox shadow="lg" borderRadius="lg" py={1.5} px={1} mt={2}>
              {renderNestedRoutes}
            </MDBox>
          </MDBox>
        </NewGrow>
      )}
    </Popper>
  );

  return (
    <Container>
      <MDBox
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 3 }}
        my={0}
        mx={0}
        width="100%"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="relative"
        left={0}
        zIndex={3}
        sx={({
          palette: { transparent: transparentColor, white, background, gradients },
          functions: { rgba, linearGradient},
        }: any) => ({
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
          background: () => {
              let backgroundValue = darkMode
                ? background.sidenav
                : linearGradient(gradients.dark.main, gradients.dark.state);
               
                if (transparentSidenav) {
                  backgroundValue = transparentColor.main;
                } else if (whiteSidenav) {
                  backgroundValue = white.main;
                }
                return backgroundValue;
            }
        })}
      >
        <MDBox
          component={Link}
          to="/"
          py={transparent ? 1.5 : 0.75}
          lineHeight={1}
          pl={{ xs: 0, lg: 1 }}
        >
          <MDBox component="img" src={rujulLogo} alt= {brand} width="30%" />
        </MDBox>
        <MDBox color="inherit" display={{ xs: "none", lg: "flex" }} m={0} p={0}>
          {renderNavbarItems}
        </MDBox>
        {(search || profile) &&
          (
            
            <MDBox display={{ xs: "none", lg: "flex" }}>
                  <IconButton
                    size="small"
                    color="inherit"
                    sx={navbarIconButton}
                    onClick={handleClick}
                    aria-describedby={id}
                  >
                      <Icon sx={iconsStyle} >search</Icon>
                  </IconButton>
                  <IconButton
                    size="small"
                    color="inherit"
                    sx={navbarIconButton}
                    onClick={handleOpenMenu}
                  >
                      <Icon sx={iconsStyle}>account_circle</Icon>
                  </IconButton>
              {renderMenu()}
              <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                  >
                <MDTypography sx={{ p: 2 }}>
                    <MDAutocomplete data={mainMenuData} />
                </MDTypography>
              </Popover>
            </MDBox>
          )}
        <MDBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: "pointer" }}
          onClick={openMobileNavbar}
        >
          {mobileView && <DefaultNavbarMobile routes={routes} open={mobileNavbar} />}
        </MDBox>
      </MDBox>
      {dropdownMenu}
      {nestedDropdownMenu}
    </Container>
  );
}

// Declaring default props for DefaultNavbar
DefaultNavbar.defaultProps = {
  brand: "Material Dashboard PRO",
  transparent: false,
  light: false,
  action: false,
};

export default DefaultNavbar;
