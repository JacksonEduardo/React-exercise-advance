import React from "react";
import { Hero } from "../components";
import backImage from "../assets/image/Contact-hero.png";
import useTitle from "../usTitle";

const ContactScreen = () => {
  useTitle("Contact Us");
  return (
    <>
      <Hero img={backImage} disableOverlay>
        <div className="contact-hero container">
          <div className="contact-hero-text">
            <div className="contact-hero-title">
              <h2 className="contact-title">
                would you like to add a cocktail?
              </h2>
              <h4 className="contact-subtitle">
                our team is always available to evaluate new recipes and to add
                them to our database.
              </h4>
            </div>
          </div>
          <div className="contact-form-container container">
            <form
              action="https://formspree.io/f/xoqzonga"
              method="POST"
              className="contact-form container"
            >
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="name"
                  className="input"
                  placeholder="Daniele"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="nome">Cognome</label>
                <input
                  type="text"
                  id="cognome"
                  name="cognome"
                  className="input"
                  placeholder="Tamarindo"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="nome">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="daniele.esempio@gmail.com"
                />
                <hr />
              </div>

              <div className="form-group">
                <label htmlFor="nome">Telephone</label>
                <input
                  type="cel"
                  id="Cellulare"
                  name="cellulare"
                  className="input"
                  placeholder="555-555-555"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="nome">Your recepies</label>
                <input
                  type="text"
                  id="recepies"
                  name="recepies"
                  className="input"
                  placeholder="Describe your recepies"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send recepies
              </button>
            </form>
          </div>
        </div>
      </Hero>
    </>
  );
};

export default ContactScreen;
