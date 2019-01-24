import React from "react";
import { NoSsr, AppBar, Tab, Tabs } from "@material-ui/core";
import AddNew from "../components/Add.js";
import Remove from "../components/Remove.js";

function TabContainer(props) {
  return <div>{props.children} </div>;
}

function LinkTab(props) {
  return (
    <Tab component="a" onClick={event => event.preventDefault()} {...props} />
  );
}

class Home extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <NoSsr>
        <div className="">
          <AppBar position="static">
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={this.handleChange}
            >
              <LinkTab label="Allocate PArking" href="page1" />
              <LinkTab label="Deallocate Parking" href="page2" />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer>
              <AddNew />
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <Remove />
            </TabContainer>
          )}
        </div>
      </NoSsr>
    );
  }
}
export default Home;
