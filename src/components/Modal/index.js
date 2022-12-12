import { Component } from "react";
import ReactModal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import validator from "validator";
import axios from "axios";

import "./modal.css";

class Modal extends Component {
  state = {
    isModalOpen: true,
    Year: "",
    Make: "",
    Model: "",
    Part: "",
    EngineType: "",
    Transmission: "",
    Name: "",
    City: "",
    Email: "",
    Phone: "",
    error: false,
    emailErr: false,
    phoneErr: false,
  };

  successResponse = () => {
    setTimeout(this.closeModal, 2000);
  };

  closeModal = () => {
    const { onRequestClose } = this.props;
    onRequestClose(false);
  };

  openModal = () => {
    const { onAfterOpen } = this.props;
    onAfterOpen(true);
    this.setState({ error: false });
  };

  verify = (event) => {
    const element = event.target.id;
    if (element === "Name") {
      this.setState({ Name: event.target.value });
    }
    if (element === "City") {
      this.setState({ City: event.target.value });
    }
    if (element === "Email") {
      if (validator.isEmail(event.target.value)) {
        this.setState({ Email: event.target.value, emailErr: false });
      } else {
        this.setState({ emailErr: true });
      }
    }
    if (element === "Phone") {
      if (validator.isMobilePhone(event.target.value, ["en-US"])) {
        this.setState({ Phone: event.target.value, phoneErr: false });
      } else {
        this.setState({ phoneErr: true });
      }
    }
    if (element === "Year") {
      this.setState({ Year: event.target.value });
    }
    if (element === "Make") {
      this.setState({ Make: event.target.value });
    }
    if (element === "Model") {
      this.setState({ Model: event.target.value });
    }
    if (element === "Part") {
      this.setState({ Part: event.target.value });
    }
    if (element === "EngineType") {
      this.setState({ EngineType: event.target.value });
    }
    if (element === "Transmission") {
      this.setState({ Transmission: event.target.value });
    }
  };

  submitInfo = async (e) => {
    e.preventDefault();
    let sendQ;
    const {
      Year,
      Make,
      Model,
      Part,
      EngineType,
      Transmission,
      Name,
      City,
      Email,
      Phone,
    } = this.state;

    if (
      Year === "" ||
      Make === "" ||
      Model === "" ||
      Part === "" ||
      EngineType === "" ||
      Transmission === "" ||
      Name === "" ||
      City === "" ||
      Email === "" ||
      Phone === ""
    ) {
      this.setState({ error: true });
    } else {
      try {
        sendQ = await axios.post(`${process.env.REACT_APP_API_URL}/SendQuery`, {
          name: Name,
          city: City,
          email: Email,
          Phone: Phone,
          year: Year,
          make: Make,
          model: Model,
          part: Part,
          engine_type: EngineType,
          transmission: Transmission,
        });
        console.log(sendQ);
        this.setState(
          {
            Year: "",
            Make: "",
            Model: "",
            Part: "",
            EngineType: "",
            Transmission: "",
            Name: "",
            City: "",
            Email: "",
            Phone: "",
            error: "success",
          },
          this.successResponse
        );
      } catch (e) {
        console.log(e);
      }
    }
  };

  render() {
    const { isOpen } = this.props;
    const { error, Make, emailErr, phoneErr } = this.state;
    let ErrorMsg;
    switch (error) {
      case true:
        ErrorMsg = "Please fill all the fields";
        break;
      case false:
        ErrorMsg = "Request Quote";
        break;
      case "success":
        ErrorMsg = "Request Sent";
        break;
      default:
        ErrorMsg = "";
    }

    const submitBtnClass =
      ErrorMsg === "Request Sent" ? "successButton" : "submitButton";

    const emailClassname = emailErr ? "inputContainer err" : "inputContainer";
    const phoneNoClassname = phoneErr ? "inputContainer err" : "inputContainer";
    const make = [
      "Select Brand",
      "Audi",
      "BMW",
      "Ford",
      "Honda",
      "Hundai",
      "Isuzu",
      "Jeep",
      "Kia",
      "Toyota",
      "Suzuki",
      "Volkswagan",
      "Volvo",
    ];
    const engine = [
      "Select Engine Volume",
      "1.1 Liter",
      "1.2 Liter",
      "1.3 Liter",
      "1.4 Liter",
      "1.5 Liter",
      "1.6 Liter",
      "1.7 Liter",
      "1.8 Liter",
      "1.9 Liter",
      "2.0 Liter",
      "2.1 Liter",
      "2.2 Liter",
      "2.3 Liter",
      "2.4 Liter",
      "2.5 Liter",
      "2.6 Liter",
      "2.7 Liter",
      "2.8 Liter",
      "2.9 Liter",
      "3.0 Liter",
      "3.1 Liter",
      "3.2 Liter",
      "3.3 Liter",
      "3.4 Liter",
      "3.5 Liter",
      "3.6 Liter",
      "3.7 Liter",
      "3.8 Liter",
      "3.9 Liter",
      "4.0 Liter",
      "4.1 Liter",
      "4.2 Liter",
      "4.3 Liter",
      "4.4 Liter",
      "4.5 Liter",
      "4.6 Liter",
      "4.7 Liter",
      "4.8 Liter",
      "4.9 Liter",
      "5.0 Liter",
      "5.1 Liter",
      "5.2 Liter",
      "5.3  Liter",
      "5.4  Liter",
      "5.5 Liter",
      "5.6 Liter",
      "5.7 Liter",
      "5.8 Liter",
      "5.9 Liter",
      "6.0 Liter",
      "6.1 Liter",
      "6.2 Liter",
      "6.3 Liter",
      "6.4 Liter",
      "6.5 Liter",
      "6.6 Liter",
      "6.8 Liter",
      "6.9 Liter",
      "7.0 Liter",
      "7.1 Liter",
      "7.2 Liter",
      "7.3 Liter",
      "7.4 Liter",
      "7.5 Liter",
      "7.6 Liter",
      "7.7 Liter",
      "7.8 Liter",
      "7.9 Liter",
      "8.0 Liter",
      "8.1 Liter",
      "8.2 Liter",
      "8.3 Liter",
      "8.4 Liter",
      "8.5 Liter",
      "8.6 Liter",
      "8.7 Liter",
      "8.8 Liter",
      "8.9 Liter",
      "9.0 Liter",
      "9.1 Liter",
      "9.2 Liter",
      "9.3 Liter",
      "9.4 Liter",
      "9.5 Liter",
      "9.6 Liter",
      "9.7 Liter",
      "9.8 Liter",
      "9.9 Liter",
      "10.0 Liter",
    ];
    const audi = [
      "Select Your Audi Model",
      100,
      200,
      4000,
      5000,
      80,
      90,
      "A3",
      "A4",
      "A5",
      "A6",
      "A8",
      "Allroad",
      "Cabriolet",
      "Coupe GT",
      "Coupe Quattro",
      "FOX",
      "Q5",
      "Q7",
      "Quattro",
      "RS4",
      "RS6",
      "S4",
      "S5",
      "S6",
      "S8",
      "S90",
      "TT",
      "V8",
    ];
    const bMW = [
      "Select Your BMW Model",
      "128i",
      "135i",
      1800,
      2002,
      2500,
      2800,
      3,
      "318i",
      "320i",
      "323i",
      "325e",
      "325i",
      "328i",
      "330i",
      "335i",
      "524TD",
      "525i",
      "528e",
      "528i",
      "530i",
      "533i",
      "535i",
      "535i GT",
      "540i",
      "545i",
      "550i",
      "550i GT",
      "630C Si",
      "633C Si",
      "635C Si",
      "645i",
      "733i",
      "735i",
      "740i",
      "745i",
      "750i",
      "760i",
      "840i",
      "ActiveHybrid",
      "Alpina",
      "L6",
      "M3",
      "M5",
      "M6",
      "X3",
      "X5",
      "X6",
      "Z3",
      "Z4",
      "Z8",
    ];
    const ford = [
      "Select Your Ford Model",
      "Aerostar",
      "Aspire",
      "Bronco",
      "Bronco Ii",
      "Contour",
      "Courier",
      "Cortina",
      "Crown Victoria",
      "Edge",
      "Escape",
      "Escort",
      "Excursion",
      "Exp",
      "Expedition",
      "Explorer",
      "F100",
      "F150",
      "F250",
      "F250SD",
      "F350",
      "F350SD",
      "F450",
      "F450SD",
      "F550SD",
      "Fairmont",
      "Falcon",
      "Festiva",
      "Fiesta",
      "Five Hundred",
      "Flex",
      "Focus",
      "Ford GT",
      "Forward Contro",
      "Freestyle",
      "Fusion",
      "Granada",
      "LN7",
      "LTD",
      "LTD II",
      "Maverick",
      "mercury",
      "Mustang",
      "Passenger",
      "Pinto",
      "Probe",
      "Ranger",
      "Taurus",
      "Taurus X",
      "Tempo",
      "Thunderbird",
      "Torino",
      "Transit connect",
      "Van",
      "Windstar",
    ];
    const honda = [
      "Select Your Honda Model",
      600,
      "Accord",
      "Civic",
      "Crosstour",
      "CRV",
      "CRX",
      "CRZ",
      "Del",
      "Element",
      "Fit",
      "Insight",
      "Odyssey",
      "Passport",
      "Pilot",
      "Prelude",
      "Ridgeline",
      "S2000",
    ];
    const hundai = [
      "Select Your Hundai Model",
      "Accent",
      "Azera",
      "Elantra",
      "Entourage",
      "Excel",
      "Genesis",
      "Pony",
      "Santa",
      "Scoupe",
      "Stellar",
      "Tiburon",
      "Tucson",
      "Veracruz",
      "XG",
    ];
    const isuzu = [
      "Select Your Isuzu Model",
      "Amigo",
      "Ascender",
      "Axiom",
      "Hombre",
      "I280",
      "I290",
      "I350",
      "I370",
      "Imark",
      "Impulse",
      "Oasis",
      "Optima",
      "Pickup",
      "Rodeo",
      "Stylus",
      "Trooper",
      "Vehicross",
    ];
    const jeep = [
      "Select Your Jeep Model",
      "Cherokee",
      "VJ",
      "Comanche",
      "Commander",
      "Compass",
      "DJ",
      "FC",
      "Grand Cherokee",
      "Grand Wagoneer",
      "J Series",
      "Jeepster",
      "Liberty",
      "Patriot",
      "Station Wagon",
      "Truck",
      "Wagoneer",
      "Wrangler",
    ];
    const kia = [
      "Select Your KIA Model",
      "Amanti",
      "Borrego",
      "Forte",
      "Magentis",
      "Optima",
      "Rio",
      "Rondo",
      "Sedona",
      "Sephia",
      "Sorento",
      "Soul",
      "Spectra",
      "Sportage",
    ];
    const toyota = [
      "Select Your Toyota Model",
      "4Runner",
      "Avalon",
      "Camry",
      "Carina",
      "Ceica",
      "Corolla",
      "Corona",
      "Cressida",
      "Crown",
      "Echo",
      "FJ",
      "FX",
      "Highlander",
      "Land",
      "Matrix",
      "MR2",
      "Paseo",
      "Pickup",
      "Innova",
    ];
    const suzuki = [
      "Select Your Suzuki Model",
      "Aerio",
      "Equator",
      "Esteem",
      "Forenza",
      "Forsa",
      "Kizashi",
      "Reno",
      "Samurai",
      "Sidekick",
      "SJ410",
      "Swift",
      "SX4",
      "Verona",
      "Vitara",
      "X90",
    ];
    const Part = [
      "Select Required Part",
      "Engine",
      "Transmission",
      "Transfer case",
      "Front axle",
      "Rear Axle",
      "Front Carrier",
      "Rear Carrier",
      "Front Differential",
      "Rear Differential",
    ];
    const transmission = [
      "Select Transmission Type",
      "Automatic 2 wheel drive",
      "Automatic 4 wheel drive",
      "AWD - All Wheel Drive",
      "Manual 2 wheel drive",
      "Manual 4 wheel drive",
    ];
    const year = [
      "Select Mfg Year",
      1990,
      1991,
      1992,
      1993,
      1994,
      1995,
      1996,
      1997,
      1998,
      1999,
      2000,
      2001,
      2002,
      2003,
      2004,
      2005,
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
    ];
    const dummy = ["Select Vechicle Model"];
    const modelName = Make;
    let model;
    switch (modelName) {
      case "Audi":
        model = audi;
        break;
      case "BMW":
        model = bMW;
        break;
      case "Ford":
        model = ford;
        break;
      case "Honda":
        model = honda;
        break;
      case "Hundai":
        model = hundai;
        break;
      case "Isuzu":
        model = isuzu;
        break;
      case "Jeep":
        model = jeep;
        break;
      case "Kia":
        model = kia;
        break;
      case "Toyota":
        model = toyota;
        break;
      case "Suzuki":
        model = suzuki;
        break;
      default:
        model = dummy;
    }
    return (
      <div>
        <ReactModal
          className="reactModalClassName"
          overlayClassName="reactModalOverlay"
          isOpen={isOpen}
          onAfterOpen={this.openModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button className="ModalCloseBtn" onClick={this.closeModal}>
            <AiOutlineClose />
          </button>
          <div className="form-heading-Container">
            <h3>Used Engines & Transmissions</h3>
            {/* <p>Free Shipping With Any Quote!</p> */}
          </div>
          <form className="registrationForm">
            <div className="inputContainer">
              <input
                onChange={this.verify}
                placeholder="Name"
                type="text"
                id="Name"
              />
            </div>
            <div className="inputContainer">
              <input
                onChange={this.verify}
                placeholder="City"
                type="text"
                id="City"
              />
            </div>
            <div className={emailClassname}>
              <input
                onChange={this.verify}
                placeholder="Email"
                type="email"
                id="Email"
              />
            </div>
            <div className={phoneNoClassname}>
              <input
                onChange={this.verify}
                placeholder="Phone no"
                type="text"
                id="Phone"
              />
            </div>
            <div>
              <select
                onChange={this.verify}
                id="Year"
                className="selectContainer"
              >
                {year.map((each) => (
                  <option key={each}>{each}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                onChange={this.verify}
                id="Make"
                className="selectContainer"
              >
                {make.map((each) => (
                  <option key={each} id={each}>
                    {each}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                onChange={this.verify}
                id="Model"
                className="selectContainer"
              >
                {model.map((each) => (
                  <option key={each} id={each}>
                    {each}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                onChange={this.verify}
                id="Part"
                className="selectContainer"
              >
                {Part.map((each) => (
                  <option key={each} id={each}>
                    {each}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                onChange={this.verify}
                id="EngineType"
                className="selectContainer"
              >
                {engine.map((each) => (
                  <option key={each} id={each}>
                    {each}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                onChange={this.verify}
                id="Transmission"
                className="selectContainer"
              >
                {transmission.map((each) => (
                  <option key={each} id={each}>
                    {each}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                id="FormSubmitButton"
                onClick={this.submitInfo}
                className={submitBtnClass}
              >
                {ErrorMsg}
              </button>
            </div>
          </form>
        </ReactModal>
      </div>
    );
  }
}

export default Modal;
