import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Paper,
  Grid
} from "@material-ui/core";
import "../styles.css";

class Add extends React.Component {
  state = {
    organization: "",
    vehical: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Paper
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: 6
        }}
      >
        <Grid container className="" spacing={24}>
          <Grid item xs={6}>
            <FormControl
              fullWidth
              className="form-control"
              style={{ minWidth: 190 }}
            >
              <InputLabel htmlFor="organization-simple">
                select organization
              </InputLabel>
              <Select
                native
                value={this.state.organization}
                onChange={this.handleChange}
                inputProps={{
                  name: "organization",
                  id: "organization-simple"
                }}
              >
                <option value="" />
                <option value={"FIGmd"}>FIGmd</option>
                <option value={"FIGmd Google"}>FIGmd Google</option>
                <option value={"Beacan"}>FIGmd Beacan</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl
              fullWidth
              className="form-control"
              style={{ minWidth: 190 }}
            >
              <InputLabel htmlFor="organization-simple">
                select vehical type
              </InputLabel>
              <Select
                native
                value={this.state.vehical}
                onChange={this.handleChange}
                inputProps={{
                  name: "vehical",
                  id: "vehical-simple"
                }}
              >
                <option value="" />
                <option value={"two"}>2 Wheeler</option>
                <option value={"four"}>4 Wheeler</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth className="form-control">
              <TextField
                id="standard-number"
                label="Vehicle number"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                margin="normal"
              />{" "}
            </FormControl>{" "}
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" color="primary">
              Save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default Add;
