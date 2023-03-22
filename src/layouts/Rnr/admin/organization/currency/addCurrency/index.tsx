import { useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React TS components

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Grid from "@mui/material/Grid";
// formik components
import { Formik, Form } from "formik";

// Material Dashboard 2 PRO React TS examples components
import RnrDashboardLayout from "examples/LayoutContainers/RnrDashboardLayout";
import GeneralDetails from "layouts/Rnr/admin/organization/currency/component/generalDetails";
import CurrencyDetails from "layouts/Rnr/admin/organization/currency/component/currencyDetails";

// NewCurrency layout schemas for form and form feilds
import validations from "layouts/Rnr/admin/organization/currency/schemas/validations";
import form from "layouts/Rnr/admin/organization/currency/schemas/form";
import initialValues from "layouts/Rnr/admin/organization/currency/schemas/initialValues";
import CurrencyTables from "layouts/Rnr/admin/organization/currency/component/currencyTables";

function getStepContent(stepIndex: number, formData: any): JSX.Element {
  switch (stepIndex) {
    case 0:
      return <GeneralDetails formData={formData} />;
    case 1:
      return <CurrencyDetails formData={formData} />;
    default:
      return null;
  }
}

function AddCurrency(): JSX.Element {
  const { formId, formField } = form;
  const currentValidation = validations[0];

  const sleep = (ms: any) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  const submitForm = async (values: any, actions: any) => {
    await sleep(1000);

    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values, null, 2));

    actions.setSubmitting(false);
    actions.resetForm();
  };

  const handleSubmit = (values: any, actions: any) => {
    // if (isLastStep) {
    //   submitForm(values, actions);
    // } else {
    //   setActiveStep(activeStep + 1);
    //   actions.setTouched({});
    //   actions.setSubmitting(false);
    // }

    submitForm(values, actions);
  };


  return (
    <RnrDashboardLayout>
      <MDBox pb={3}>
        <Card>
          <Formik
            initialValues={initialValues}
            validationSchema={currentValidation}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, isSubmitting }) => (
              <Form id={formId} autoComplete="off">
                <MDBox display={"flex"} p={3} lineHeight={1} justifyContent={"space-between"}>
                  <MDTypography variant="h5" fontWeight="medium">
                    Add Currency
                  </MDTypography>
                  <MDButton variant="gradient" color="info" disabled={isSubmitting} type="submit">
                    <Icon>add</Icon>&nbsp; Save
                  </MDButton>
                </MDBox>
                <Grid item xs={12} md={12} lg={12}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6} lg={6}>
                      {getStepContent(0, {
                        values,
                        touched,
                        formField,
                        errors,
                      })}
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      {getStepContent(1, {
                        values,
                        touched,
                        formField,
                        errors,
                      })}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={12} lg={12} mt={2}>
                  <CurrencyTables />
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Card>
      </MDBox>
    </RnrDashboardLayout>
  );
}

export default AddCurrency;
