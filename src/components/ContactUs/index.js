import { Component } from "react";
import Header from "../header";
import "./index.css";

class ContactUs extends Component {
  render() {
    return (
      <div className="contactUsMainContainer">
        <Header />
        <div className="contactUsSection1">
          <h1>This is Contact page</h1>
          <p>under development</p>
        </div>
      </div>
    );
  }
}

export default ContactUs;
