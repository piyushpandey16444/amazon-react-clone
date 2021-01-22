import React from "react";
import "./Home.css";
import Product from "./Product"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
        />

        <div className="home__row">
          {/* prod1 */ }
          <Product title="New Apple Watch SE (GPS, 44mm) - Silver Aluminium Case with White Sport Band"
          image="https://m.media-amazon.com/images/I/71fp5ankbqL._AC_UL320_.jpg"
          price="32,900"
          rating={2} />
          {/* prod2 */ }
          <Product title="Apple Watch Series 3 (GPS + Cellular, 38mm) - Silver Aluminium Case with White Sport Band"
          image="https://m.media-amazon.com/images/I/61wlAEecpTL._AC_UL320_.jpg"
          price="37,900"
          rating={4} />
        </div>

        <div className="home__row">
          <Product title="Apple Watch Series 3 (GPS + Cellular, 38mm) - Silver Aluminium Case with White Sport Band"
          image="https://m.media-amazon.com/images/I/71bVaoE6ElL._AC_UL320_.jpg"
          price="47,900"
          rating={4}/>

          <Product title="Apple Watch Series 3 (GPS + Cellular, 38mm) - Silver Aluminium Case with White Sport Band"
          image="https://m.media-amazon.com/images/I/61wlAEecpTL._AC_UL320_.jpg"
          price="37,900"
          rating={4} />

          <Product title="Apple Watch Series 3 (GPS + Cellular, 38mm) - Silver Aluminium Case with White Sport Band"
          image="https://m.media-amazon.com/images/I/41aj+PTd5DL._AC_UL320_.jpg"
          price="37,900"
          rating={4} />
        </div>

        <div className="home__row">
          <Product title="Mi TV 4X 138.8 cm (55 Inches) Ultra HD Android LED TV (Black)"
          image="https://images-na.ssl-images-amazon.com/images/I/71TnQAWM2tL._SL1500_.jpg"
          price="37,500"
          rating={4} />
        </div>

      </div>
    </div>
  );
}

export default Home;
