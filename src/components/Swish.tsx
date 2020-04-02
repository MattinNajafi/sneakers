import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export interface Props {}

export interface State {}

class Swish extends React.Component<Props, State> {
  render() {
    return (
      <div className="adress-Recap">
        <div>
          <h5 className="headers">SWISH DETAILS:</h5>
          <TextField
            type="name"
            name="Fullname"
            //   value={this.state.firstName}
            label="Full name"
            // onChange={this.handleChange}
            //   onKeyDown={this.onlyLetter}
          />
          <TextField
            type="tel"
            name="PhoneNumber"
            //   value={this.state.firstName}
            label="Phone Number"
            // onChange={this.handleChange}
            //   onKeyDown={this.onlyLetter}
          />
        </div>
        <div>
          <Link to="/checkout">
            <Button>Next</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Swish;
