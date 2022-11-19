import { Component } from "react";
// import ReactModal from "react-modal";
// import { AiOutlineClose } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header";


// import validator from "validator";
// import axios from "axios";
import "./payments.css";
class Payment extends Component {
 render(){
  return(
    <div className="paymentsMainContainer">
      <Header/>
        <form className="PaymentsformContainer">
          <div className="formHeadContainer">
            <hr className="designhr"/>
            <p>Authorization for Charge to Credit Card I, the undersigned, authorize Bestused Autoparts, to use my credit card for the below purchase, and Bestused Autoparts,
ANY PURCHASE OVER $500 WE WILL REQUIRE A COPY OF CREDIT CARD AND DRIVERS LICENSE.</p>
          </div>
          <p>Please fill the Form to Accept the Warranty.</p>
          <div className="paymentDetailsContainer">
            <div className="PaymentInputContainer">
              <label htmlFor="CardNumber">Card Number *</label>
              <input id='CardNumber' type="number" placeholder="Card Number"/>
            </div>
            <div className="PaymentInputContainer">
              <label htmlFor="CardName">Name on the Card *</label>
              <input id='CardName' type="text" placeholder="Name on the Card"/>
            </div>
            <div className="PaymentInputContainer">
              <label htmlFor="Cvv">CVV Number *</label>
              <input id='Cvv' type="number" placeholder="CVV"/>
            </div>
            <div className="PaymentInputContainer">
              <label htmlFor="CardName">Expiry Date *</label>
              <div className="paymentExpDate">
              <input type="number" placeholder="Month"/>
              <input type="number" placeholder="Year"/>
              </div>
            </div>
            <div className="PaymentInputContainer">
              <label htmlFor="CardName">Card Type *</label>
              <input id='CardType' type="text" placeholder="Card Type"/>
            </div>
            <div className="PaymentInputContainer">
              <label htmlFor="Name">Your Name *</label>
              <input id='Name' type="text" placeholder="Your Name"/>
            </div>
            <div className="PaymentInputContainer">
              <label htmlFor="billingAdd">Biling Address *</label>
              <input id='billingAdd' type="text" placeholder="billing Address"/>
            </div>
            <div className="PaymentInputContainer">
              <label htmlFor="shipAdd">Shipping Address *</label>
              <input id='shipAdd' type="text" placeholder="Shipping Address"/>
            </div>
            <div className="PaymentInputContainer">
              <label htmlFor="email">Email Id *</label>
              <input id='email' type="email" placeholder="Email"/>
            </div>
            <div className="PaymentInputContainer">
              <label htmlFor="phno">Contact Number *</label>
              <input id='phno' type="number" placeholder="Contact Number"/>
            </div>
            <div className="PaymentInputContainer">
              <label htmlFor="dr">Driving License Image*</label>
              <input id='dr' type="file" placeholder="Driving License"/>
            </div>
            <div className="PaymentInputContainer">
              <label htmlFor="cc">Credit Card Image*</label>
              <input id='cc' type="file" placeholder="Credit Card"/>
            </div>
          </div>
        </form>

      </div>
  )
 }
}

export default Payment;
