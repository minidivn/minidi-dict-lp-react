import React from "react";
import { appDescription } from "../../../data/MyAppFeaturesData";

export default function MyAppJumboHeader({}) {
  return (
    <section className="hero is-white is-fullheight">
      <div
        className="hero-body"
        style={{
          backgroundImage: "url('/images/background/travel-world.png')",
          backgroundSize: "80%",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container">
          <div className="columns  is-vcentered reverse-columns">
            <div
              className="column
        is-10-mobile is-offset-1-mobile
        is-10-tablet is-offset-1-tablet
        is-5-desktop is-offset-1-desktop
        is-5-widescreen is-offset-1-widescreen
        is-5-fullhd is-offset-1-fullhd"
              data-aos="fade-down"
            >
              <h1 className="title titled is-1 mb-6 minidi">
                {appDescription.name}
              </h1>
              <h2 className=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif">
                {appDescription.description}
              </h2>
              <div className="buttons">
                <button className="button is-black">Download</button>
                <button className="button">Subscribe</button>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="column
        is-10-mobile is-offset-1-mobile
        is-10-tablet is-offset-1-tablet
        is-4-desktop is-offset-1-desktop
        is-4-widescreen is-offset-1-widescreen
        is-4-fullhd is-offset-1-fullhd"
            >
              <figure className="image">
                <img
                  alt="MainScreenshot"
                  src="/images/screenshot/screenshot (2).png"
                  style={{
                    position: "absolute",
                    width: "600px",
                    left: "-120px",
                    top: "-380px",
                    maxWidth: "600px",
                    height: "500px"
                  }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
