import React from "react";

const FeatureTable = ({ features }) => (
  <div className="columns is-multiline box">
    {(features || []).map((feature, index) => (
      <div key={feature.title + "_" + index} className="column is-6 box">
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src={feature.icon} />
            </p>
          </figure>
          <div className="media-content">
            <h1 className="title is-4">
              <b>{feature.title}</b>
            </h1>
            <h5>{feature.description}</h5>
          </div>
        </article>
      </div>
    ))}
  </div>
);

const ColFade = ({ feature, isImage, fadeDir }) =>
  isImage ? (
    <div
      data-aos={"fade-" + fadeDir}
      className="column
        is-10-mobile is-offset-1-mobile
        is-10-tablet is-offset-1-tablet
        is-4-desktop is-offset-1-desktop
        is-4-widescreen is-offset-1-widescreen
        is-4-fullhd is-offset-1-fullhd"
    >
      <figure className="image">
        <img alt="Screenshot" src={feature.image} />
      </figure>
    </div>
  ) : (
    <div
      data-aos={"fade-" + fadeDir}
      className="column
        is-10-mobile is-offset-1-mobile
        is-10-tablet is-offset-1-tablet
        is-5-desktop is-offset-1-desktop
        is-5-widescreen is-offset-1-widescreen
        is-5-fullhd is-offset-1-fullhd"
    >
      <h1 className="titled title is-1 mb-6">{feature.title}</h1>
      <h2 className="subtitled subtitle">{feature.description}</h2>
    </div>
  );
export default function MyAppFeatures({ features, bigFeatures }) {
  return (
    <div>
      <section className="hero is-medium has-text-centered">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div data-aos="zoom-in-up" className="column is-8">
                <h1 className="title titled is-1 mb-6">Features</h1>
                <hr />
                <FeatureTable features={features} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-white">
        <div className="hero-body">
          <div className="container">
            <div className="columns  is-vcentered">
              <ColFade feature={bigFeatures[0]} fadeDir="left" isImage />
              <ColFade
                feature={bigFeatures[0]}
                fadeDir="down"
                isImage={false}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-white">
        <div className="hero-body">
          <div className="container">
            <div className="columns  is-vcentered reverse-columns">
              <ColFade
                feature={bigFeatures[1]}
                fadeDir="right"
                isImage={false}
              />
              <ColFade feature={bigFeatures[1]} fadeDir="down" isImage />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
