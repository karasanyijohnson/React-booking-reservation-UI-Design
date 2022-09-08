import React from "react";
import "./hotel.css";
import NavBar from "../../components/navBar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

// Individual Hotel
const Hotel = () => {
  const photos = [
    {
      src: "https://i.pinimg.com/236x/e6/94/c6/e694c6bcc76ae6a8671cafc418680255.jpg",
    },
    {
      src: "https://i.pinimg.com/236x/54/e1/c3/54e1c389208b0a8fa04388adb36a9057.jpg",
    },
    {
      src: "https://i.pinimg.com/236x/50/34/7a/50347a48a92401a19a83f8be111354de.jpg",
    },
    {
      src: "https://i.pinimg.com/236x/28/9e/47/289e478b03827a672a1a479425de8dca.jpg",
    },
    {
      src: "https://i.pinimg.com/236x/17/2a/52/172a526f27a35f792768e8d659777a4c.jpg",
    },
    {
      src: "https://i.pinimg.com/236x/ca/cd/0f/cacd0fdb664044187d2bb610f1474848.jpg",
    },
  ];
  return (
    <div>
      <NavBar />
      <Header type="List" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 125 new york</span>
          </div>
          <span className="hotelDistance">
            Excellent Location -500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in heart of Krakow</h1>
              <p className="hotelDesc">
                Offering a restaurant, Legend Boutique Hotel is located in
                Kacyiru. Free WiFi access is available. Each room here will
                provide you with a TV, air conditioning and a seating area.
                There is also a dining table. Featuring a shower, private
                bathroom also comes with a bath and a bath or shower. You can
                enjoy mountain view and city view from the room. Extras include
                satellite channels and cable channels. At Legend Boutique Hotel
                you will find a 24-hour front desk, a garden and barbecue
                facilities. Other facilities offered at the property include
                entertainment staff, meeting facilities and a shared lounge. The
                property offers free parking.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for 9-night stay!</h1>
              <span>
                Located in the real heart of krakov, this property has an
                Excellent location score of 9.8!
              </span>
              <h2>
               <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hotel;
