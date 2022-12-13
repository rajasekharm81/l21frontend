import { Component } from "react";
import Header from "../header";
import engine1 from "../../assects/engine1.jpg";
import tyres from "../../assects/tyres.jpg";
import transmission from "../../assects/transmission.webp";
import carAxle from "../../assects/carAxle.webp";
import Footer from "../footer"
import "./index.css";

class Shop extends Component {
  render() {
    return (
      <>
      <div className="shopMainContainer">
        <Header />
        <div className="shopContent">
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bolder"
            }}
          >
            Shop now
          </h1>
          <div className="engineContainer">
            <div>
              <img
                className="partPic"
                src={engine1}
                alt="engine&transmission"
              />
              <h1 style={{ textAlign:"Center"}}>Engines</h1>
            </div>

            <p className="partPara">
              Every vehicle on the road requires power to keep moving. This
              power is generally under the hood in the form of an Engine.
              Without a working engine, you are going nowhere without a tow
              truck.
              <br /> Every engine is made up of many different parts that keep
              it going. When one part fails the entire engine can fail along
              with it.
              <br /> You may think an engine repair or part purchase means an
              expensive trip to the deal. That is not the case with the help of
              L21-premium auto parts.
              <br /> L21-premium auto parts offers the best prices and selection
              for any part under the hood. We have a nationwide inventory and
              buying power to bring you the value you need. Each engine
              compartment part we offer is backed by our industry-leading
              warranty so you will have confidence in your purchase.
            </p>
          </div>
          <div className="engineContainer">
            <p className="partPara">
              Wheels and rims always make statements . They can be as functional
              or as stylish as you want them to be. wheels and rims are very
              critical to keep your vehicle moving down the road but more than
              that, they are stylish. Perhaps your wheels were deface in an
              accident or maybe you hit a curb. Has the weather taken a toll on
              the finish? There are countless things out there to make your
              wheels look less than their best. Think replacing a wheels have to
              cost a fortune…think again!
              <br /> L21-premium auto parts is here to get your vehicle looking
              and driving its best with quality used wheels that have been
              tested for quality. Each used wheels and rims is backed by our
              industry-leading warranty so you can shop with confidence.
            </p>
            <div>
              <img className="partPic"  src={tyres} alt="engine&transmission" />
              <h1 style={{ textAlign:"Center"}}>Tyres</h1>
            </div>
          </div>
          <div className="engineContainer">
            <div>
              <img className="partPic" src={transmission} alt="engine" />
              <h1 style={{ textAlign:"Center"}}>Transmissions</h1>
            </div>
            <p className="partPara">
              A car transmission is one of the most important components of a
              vehicle. It's what moves the power from the engine to the wheels.
              imagine if you ever in position of blasted transmission and can't
              go for a big-budget one???
              <br /> hey but you don't need to worry... L21-premium auto parts
              is here to get you the best OEM transmission for you with A graded
              condition, for you at the best price. Remember, If you don't have
              it we can get it.
            </p>
          </div>
          <div className="engineContainer">
            <p className="partPara">
              An Axle is a rod or shaft that connects a pair of wheels to propel
              them and retain the position of the wheels to one another. In a
              car, the engine applies the force to the axle which rotates the
              wheels and moves the vehicle forward. In other words, axles
              deliver the driving power from the engine to the wheels. If an
              axle begins to fail while driving, your car will start to pull to
              one side as one wheel loses power, looking for a new one would
              cost your hard-earned gold. But here we are you can get a used
              axle just by calling L21-premium auto parts, we can provide you
              the best parts with a great assurance .
            </p>
            <div>
              <img className="partPic" src={carAxle} alt="engine" />
              <h1 style={{ textAlign:"Center"}}>Axle</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  }
}

export default Shop;
