import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { useStyles } from "./ApplicantForm.styles";
export default function ApplicantContactInfo({
  formState,
  handleChanges,
  setFormState,
  formHelperText,
  handleValidation,
}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.firstName ? true : false}
            helperText={formHelperText.firstName}
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={formState.firstName}
            onChange={handleChanges}
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.lastName ? true : false}
            helperText={formHelperText.lastName}
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={formState.lastName}
            onChange={handleChanges}
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.sector ? true : false}
            helperText={formHelperText.sector}
            required
            id="sector"
            name="sector"
            label="Sector"
            value={formState.sector}
            onChange={handleChanges}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.city ? true : false}
            helperText={formHelperText.city}
            required
            id="city"
            name="city"
            label="City"
            value={formState.city}
            onChange={handleChanges}
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.state ? true : false}
            helperText={formHelperText.state}
            id="state"
            name="state"
            value={formState.state}
            onChange={handleChanges}
            label="State/Province/Region"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.zip ? true : false}
            helperText={formHelperText.zip}
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            value={formState.zip}
            onChange={handleChanges}
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.country ? true : false}
            helperText={formHelperText.country}
            required
            id="country"
            name="country"
            value={formState.country}
            onChange={handleChanges}
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="org" checked={formState.org} />
            }
            onClick={() => setFormState({ ...formState, org: !formState.org })}
            label="Are you part of an organization?"
          />
        </Grid>
      </Grid>
    </div>
  );
}
