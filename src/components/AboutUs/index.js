import { Component } from "react";
import Header from "../header";
import "./index.css";
// import { AiOutlineCaretRight } from "react-icons/ai";
class AboutUs extends Component {
  render() {
    return (
      <div className="aboutUsMainContainer">
        <Header />
        <div className="aboutUsHeading">
          <img
            className="aboutUsImage"
            src="https://res.cloudinary.com/dcqzidejd/image/upload/v1666949488/about_us_bhmmce.jpg"
            alt="about us"
          />
        </div>
        <div className="contentContianer">
          <h3>
            Welcome to L21 Premium Autoparts, Used Engine and Used Transmission
            locating Service!
          </h3>
          <ul>
            <li>
              One stop platform for new and used auto parts, Submit a request
              using our free used engine locator service and our nation wide
              network of dealers will contact you directly with pricing and
              information about the used engine or transmission you are looking
              for.
            </li>
          </ul>

          <h2>How it works</h2>
          <ul>
            <li>
              This site allows you to submit a request for a new or used engine,
              transmission or any body part to a network of suppliers
            </li>
            <li>
              The suppliers will contact you directly by email, phone or text
              message with information and pricing.
            </li>
            <li>
              The method of contact was determined by you when the request form
              was filled out.
            </li>
            <li>We recommend always including your phone number.</li>
            <li>
              This request is only sent 1 time so you do not need to be asked to
              have your email address removed.
            </li>
          </ul>

          <h3>What happens next?</h3>
          <ul>
            <li>
              After you submitted your request, dealers on our network will
              begin emailing, texting or calling you with price quotes and
              information. Each dealer is independently owned so the cost of
              your part, shipping time, shipping cost and warranties will vary.
              You may request to have the part delivered to you, your shop or
              you can arrange your own pick up.
            </li>
            <li> For your protection</li>
            <li>
              Our dealers pay a subscription fee to be on our network. We
              connect buyers and sellers in the marketplace. We strongly
              recommend after you decide who to do business with, you only pay
              by credit card or PayPal. Never send cash, check, wire transfer or
              Western Union. You are under no obligation to purchase at any
              time.
            </li>
            <li>
              If you have any questions or concerns about our service please
              email us at info@bestusedautoparts.com. Thank you for using our
              service.
            </li>
          </ul>
        </div>
        <section className="contentContianer">
          <h2>
            L21 Premium Autoparts
            <span style={{ backgroundColor: "blue" }}>
              {" "}
              Warranty Information
            </span>
          </h2>
          <hr />
          <ul>
            <li>Warranties Are Not Transferable </li>
            <li>To validate you must present original invoice</li>
            <li>Copies are not acceptable</li>
          </ul>
          <h3>Limited Warranty</h3>
          <p>
            Your recycled part from L21 Premium Autoparts is covered by this
            limited warranty unless specifically excluded in writing at the time
            of sale.
          </p>
          <h3>General</h3>
          <ul>
            <li>
              This warranty applies only to the original purchaser of the part
              and only as long as the part is still installed in the vehicle for
              which it was originally purchased for 90 days, or for longer if an
              extended warranty is purchased. The warranty is not transferable.
              If any defect is discovered during the warranty period, the All
              American Auto Wreckers must be informed immediately. All claims
              must be accompanied by the part and the original sales receipt.
              Defects must be verified and all work under this warranty
              authorized by the L21 Premium Autoparts. Transportation cost of
              any part to the L21 Premium Autoparts is specifically excluded
              from this warranty. The L21 Premium Autoparts reserves the right
              to repair, replace, or refund the purchase price of any part at
              its option. Such repair, replacement or refund will satisfy all
              obligation under this warranty. Any improper use, abuse (including
              but not limited to overheating or low oil engines and
              transmissions), neglect, careless handling, damage done by
              improper installation or repairs, or removal of a part from the
              vehicle in which it was first installed after purchase from the
              L21 Premium Autoparts shall void this warranty. Melting of heat
              tabs installed by the All American Auto Wreckers if applicable
              will be considered evidence of overheating. Labor costs, including
              the cost of moving attached external parts from the purchaser’s
              old part to the L21 Premium Autoparts part, seals, gaskets,
              fluids, and similar supplies are specifically excluded from this
              warranty.
            </li>
            <li>
              The Liability and obligation of the L21 Premium Autoparts under
              this warranty shall not include any inconvenience, transportation,
              towing, labor expense (unless a limited warranty is purchased),
              down time, or direct or indirect or consequent damage, or delay
              resulting from any defect. This warranty is in lieu of any other
              warranties expressed or implied, including any implied warranty of
              merchant-ability or fitness for a particular purpose. No action by
              the L21 Premium Autoparts under this warranty shall extend the
              original warranty period or alter its obligation. This warranty
              give you specific legal rights. You may also have other rights
              which vary from state to state.
            </li>
          </ul>
          <h3>Engines</h3>
          <ul>
            <li>
              The L21 Premium Autoparts warrants to the original purchaser the
              internal parts of its engines to be free of defects for a period
              of 90 days from the date of sale. The parts covered by this
              warranty are the entire block, cylinder head with valves, cam
              shaft, connecting rods and bearings, pistons, piston rings, oil
              pump, crankshaft and bearings, rocker arms, valve lifters, and
              other internal parts. Excluded from this warranty are the
              carburetor, fuel pump, water pump, all electrical parts, hoses,
              lines, intake and exhaust manifolds, fuel injector pumps, all
              other fuel injection parts, and all other external parts.
              Calibration and adjustment of excluded parts. Calibration and
              adjustment of excluded parts is also excluded from this warranty.
              This warranty is void if new oil and oil filter are not used in
              installation.
            </li>
          </ul>
          <h3>Transmissions</h3>
          <ul>
            <li>
              The L21 Premium Autoparts warrants to the original purchaser its
              transmission to be free of defects for a period of 90 days from
              the date of sale. The parts covered by this warranty are the
              transmission case and all internal parts including the torque
              converter. Excluded from this warranty are the transmission
              mounts, shifting linkage, flywheel, all other external parts, and
              problems that result from not installing new front and rear main
              seals when installing the transmission.
            </li>
          </ul>
          <h3>Refund Policy</h3>
          <ul>
            <li>
              Refunds are paid by check. Refund checks will be made payable to
              the purchaser’s name on the invoice. If merchandise was purchased
              by check, please allow 10 working days for refund. Items not
              defective which are returned are subject to acceptance to All
              American Auto Wreckers and must be returned within 30 calendar
              days of purchase date. Parts that are accepted for return are
              subject to a service charge. Electronic parts are sold as is.
            </li>
          </ul>
          <p style={{ fontStyle: "italic", fontSize: "10px" }}>
            *To validate warranties you must present original invoice. Copies
            are not acceptable.
          </p>
        </section>
      </div>
    );
  }
}

export default AboutUs;
