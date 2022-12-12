import React, { Component } from "react";
import { Button } from "react-bootstrap";

import "./index.css";

import Header from "../header";
import videoBg from "../../assects/WhatsApp Video 2022-10-19 at 16.06.34.mp4";
import Slider from "react-slick";
import Modal from "../Modal";
// import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Home extends Component {
  state = { isModalOpen: false };

  openModal = (value) => {
    this.setState({ isModalOpen: true });
  };

  closeModal = (value) => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
    };
    const slickImages = [
      [
        "https://res.cloudinary.com/dcqzidejd/image/upload/v1666242139/automobilewebsite/rims_dpdvgi.jpg",
        "Wheels and Rims",
      ],
      [
        "https://res.cloudinary.com/dcqzidejd/image/upload/v1666242139/automobilewebsite/engine_ucm2oq.jpg",
        "Engines",
      ],
      [
        "https://res.cloudinary.com/dcqzidejd/image/upload/v1666242138/automobilewebsite/headlights_xmn37y.jpg",
        "Headights",
      ],
      [
        "https://res.cloudinary.com/dcqzidejd/image/upload/v1666242139/automobilewebsite/brake_disk_u6stvy.jpg",
        "Brake Disks",
      ],
      [
        "https://res.cloudinary.com/dcqzidejd/image/upload/v1666242139/automobilewebsite/interior_ndlczr.jpg",
        "Interior",
      ],
    ];

    const { isModalOpen, modelInfo } = this.state;
    const rootClassName = isModalOpen ? "rootDull" : "root";

    const section3Content = (
      <>
        <section className="section3Content">
          <div className="section3part1">
            <h1>Looking for a used Engines and Transmissions ?</h1>
            <hr />
            <p>
              You can contact us directly for ordering any engine and
              Transmission, our team will help you to provide A graded parts for
              you with great discount.
            </p>
            <Button
              onClick={this.openModal}
              className="bootButton"
              variant="outline-warning"
            >
              Contact us
            </Button>
          </div>
          <div className="section3part2">
            <img
              src="https://res.cloudinary.com/dcqzidejd/image/upload/v1666603261/automobilewebsite/car_background_t3mson.jpg"
              alt="car"
              className="section3image"
            />
          </div>  
        </section>
      </>
    );
    // const renderContent = inView ? section3Content : null;
    return (
      <div className={rootClassName}>
        <div className="homeMainContiner">
          <video
            className="backgroundVideo"
            autoPlay
            loop
            muted
            src={videoBg}
          />
          <div className="content">
            <Header />
          </div>
        </div>
        <div className="section2Container">
          <div>
            <h1 className="categoryHeading">Shop by Category</h1>
          </div>
          <div className="sliderContainer">
            <Slider className="slider" {...settings}>
              {slickImages.map((each) => (
                <div key={each.indexOf()} className="sliderItem">
                  <img
                    onClick={this.openModal}
                    className="image"
                    src={each[0]}
                    alt="spare"
                  />
                  <div className="paraContainer">
                    <p className="para">{each[1]}</p>
                    <Modal
                      isOpen={isModalOpen}
                      onAfterOpen={this.openModal}
                      onRequestClose={this.closeModal}
                      initialInfo={modelInfo}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="section3Container">{section3Content}</div>
        </div>
    );
  }
}

export default Home;
