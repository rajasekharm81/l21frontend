import { Component } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header";
import { BsCreditCard2BackFill, BsCreditCard2Front } from "react-icons/bs"
import Footer from "../footer"

// import validator from "validator";
// import axios from "axios";
import "./payments.css";
class Payment extends Component {
  changed = (event) => {
    console.log("changed", event.target.value)
  }
  render() {
    return (
      <>
      <div className="paymentsMainContainer">
        <Header />
        <Box className="formContainer"
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="cardnum"
              label="Card Number"
              className="input"
              type="number"
              size="small"
            />
            <TextField
              required
              id="cardName"
              label="Name on Card"
              className="input"
              size="small"
            />
            <TextField
              required
              id="cvv"
              label="CVV"
              className="input"
              type="number"
              size="small"
            />
            <TextField
              required
              id="Month"
              label="Exp Month"
              className="input"
              type="number"
              size="small"
              style={{ width: "100px", margin: "10px 0px 0px 10px" }}
            />
            <TextField
              required
              id="year"
              label="Exp Year"
              className="input"
              type="number"
              size="small"
              style={{ width: "100px", margin: "10px 0px 0px 0px" }}
            />
            <TextField
              required
              id="ctype"
              label="Card Type"
              className="input"
              type="text"
              size="small"
            />
            <TextField
              required
              id="Name"
              label="Name"
              className="input"
              type="text"
              size="small"
            /><TextField
              required
              id="BillAdd"
              label="Billing Address"
              className="input"
              type="text"
              size="small"
            /><TextField
              required
              id="sAdd"
              label="Shipping Address"
              className="input"
              type="text"
              size="small"
            /><TextField
              required
              id="email"
              label="Email Id"
              className="input"
              type="email"
              size="small"
            />
            <TextField
              required
              id="ContactNo"
              label="Contact No"
              className="input"
              type="number"
              size="small"
            />
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input onChange={this.crChanged} hidden accept="image/*" type="file" />
              <BsCreditCard2BackFill style={{ fontSize: "3vw", marginRight: "10px" }} />Upload Credit card
            </IconButton>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input onChange={this.DlChanged} hidden accept="image/*" type="file" />
              <BsCreditCard2Front style={{ fontSize: "3vw", marginRight: "10px" }} />Upload Driving Licence
            </IconButton>
          </div>
        </Box>
      </div>
      <Footer style={{position:"absolute", bottom:0}}/>
      </>
    )
  }
}

export default Payment;
