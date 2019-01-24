import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  Paper
} from "@material-ui/core";
class Remove extends React.Component {
  state = {
    organization: ""
  };
  handleChange = event => {
    debugger;
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
        <FormControl fullWidth style={{ minWidth: 190 }}>
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
      </Paper>
    );
  }
}

export default Remove;
