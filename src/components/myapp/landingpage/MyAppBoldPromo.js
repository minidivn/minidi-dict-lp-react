import React from "react";

export default function MyAppBoldPromo({}) {
  return (
    <section className="hero is-medium has-text-centered">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div data-aos="zoom-in-up" className="column is-8">
              <h1 className="title titled is-1 mb-6">
                Next-gen Dictionary
                <span id="typewriter" />
              </h1>
              <h2 className="subtitle subtitled">
                Translate and learn everywhere you go!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
