import { useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React TS components

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// react-router-dom components
import { Link } from "react-router-dom";

// Material Dashboard 2 PRO React TS examples components
import RnrDashboardLayout from "examples/LayoutContainers/RnrDashboardLayout";
import RnrDataTable from "rnrComponents/sharedComponent/RnrDataTable";
import RnrDialog from "rnrComponents/sharedComponent/Dialog";
// Data
import dataTableData from "layouts/Rnr/admin/organization/currency/data/dataTableData";

function Users(): JSX.Element {

  const [isDelete, setIsDelete] = useState<boolean>(false);

  const handleRowEdit = (obj: any) => {
    console.log('Row Edit', obj);
  }

  const handleRowDelete = (obj: any) => {
    setIsDelete(true);
    console.log('Row Delete', obj);
  }

  const handleRowDetails = (obj: any) => {
    console.log('Row Details', obj);
  }

  const handleRowLogs = (obj: any) => {
    console.log('Row Logs', obj);
  }

  const handleDelete = () => {
    setIsDelete(false);
  }

  return (
    <RnrDashboardLayout>
      <MDBox pb={3}>
        <Card>
          <MDBox display={'flex'} p={3} lineHeight={1} justifyContent={'space-between'}>
            <MDTypography variant="h5" fontWeight="medium">
              Users
            </MDTypography>
            <MDButton variant="gradient" color="info"
              component={Link}
              to="/admin/organization/currency/add"
            >
              <Icon>add</Icon>&nbsp;
              Add
            </MDButton>
          </MDBox>
          <RnrDataTable
            table={dataTableData}
            canSearch
            searchByCol
            actionColumn
            onRowEdit={handleRowEdit}
            onRowDelete={handleRowDelete}
            onRowDetails={handleRowDetails}
            onRowLogs={handleRowLogs}
          />
        </Card>
      </MDBox>
      <RnrDialog
        title="Confirm"
        description="Are you sure you want to delete this record?"
        yes="Yes"
        no="No"
        isOpen={isDelete}
        onDisagree={handleDelete}
      ></RnrDialog>
    </RnrDashboardLayout>

  );
}

export default Users;
