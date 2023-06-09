import React from "react";
import { Hero, Card } from "../components";
import { valueCards, teamCards } from "../utils/info";
import image from "../assets/image/about-hero.jpg";
import teamImg from "../assets/image/team-img.jpg";
import useTitle from "../usTitle";
const AboutScreen = () => {
  useTitle("AboutUs");
  return (
    <>
      <Hero img={image}>
        <section className="about-hero">
          <div className="about-text">
            <div className="topline"></div>
            <h3>
              <q>
                Alcohol may be man's worst enemy, but the Bible says love your
                enemy
              </q>
            </h3>
            <div className="underline"></div>
          </div>
        </section>
      </Hero>
      <section className="about-value">
        <div className="container about-value-content">
          <h3 className="brand-secondary-color">IL NOSTRO PROGETTO</h3>
          <div className="card-section">
            {valueCards.map((card) => {
              return (
                <Card key={card.title} {...card} className={"value-card"} />
              );
            })}
          </div>
        </div>
      </section>
      <section className="about-team">
        <div
          className="team-img"
          style={{
            background: ` url(${teamImg}) `,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="about-team-content container">
          <h3 className="brand-secondary-color">Our Team</h3>
          {teamCards.map((card) => {
            return <Card key={card.title} {...card} />;
          })}
        </div>
      </section>
    </>
  );
};

export default AboutScreen;
