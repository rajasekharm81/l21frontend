import { Component } from "react";
import Header from "../header";

import Modal from "../Modal";
import "./index.css";

class ContactUs extends Component {
  render() {
    return (
      <div className="contactUsMainContainer">
        <Header />
        <div style={{display:"flex", flexDirection:"row"}}>
            <div className="contactUsSection1">
            </div>
            <div>
              <h1>This is Contact page</h1>
              <p>under development</p>
            </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
