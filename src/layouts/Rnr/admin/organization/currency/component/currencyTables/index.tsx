import { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { AppBar, Tab, Tabs } from "@mui/material";
import CurrencyConversion from "layouts/Rnr/admin/organization/currency/component/currencyConversion";
import CurrencyDenomination from "layouts/Rnr/admin/organization/currency/component/currencyDenomination";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <MDBox sx={{ p: 3 }}>
                    <MDTypography>{children}</MDTypography>
                </MDBox>
            )}
        </div>
    );
}
function CurrencyTables(): JSX.Element {
    const [tabValue, setTabValue] = useState<number>(0);
    const handleSetTabValue = (event: any, newValue: number) => setTabValue(newValue);
    return (
        <Grid container xs={12} sm={12}>
            <Grid item xs={12} sm={6}>
                <MDBox pl={2}>
                    <AppBar position="static">
                        <Tabs orientation="horizontal" value={tabValue} onChange={handleSetTabValue}>
                            <Tab label="Currency Conversion" />
                            <Tab label="Currency Denomination" />
                        </Tabs>
                    </AppBar>
                </MDBox>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Card >
                    <MDBox >
                        <TabPanel value={tabValue} index={0}>
                            <CurrencyConversion />
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}>
                            <CurrencyDenomination />
                        </TabPanel>
                    </MDBox>
                </Card>
            </Grid>
        </Grid>
    );
}
export default CurrencyTables;