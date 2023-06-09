import React, { useState, useEffect } from "react";
import { Hero, Cocktails, ErrorMessage, Loading } from "../components";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { FaSearch } from "react-icons/fa";
import animationData from "../assets/animation/drink-animation.json";
import { useGlobalContext } from "../context";
import useTitle from "../usTitle";

const HomeScreen = () => {
  useTitle("Home Screen");
  const {
    query,
    isLoading,
    data,
    isError,
    count,
    searchCocktail,
    deleteScrollPosition,
    scrollPosition,
  } = useGlobalContext();
  const [input, setInput] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCocktail(input);
  };

  useEffect(() => {
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
      deleteScrollPosition();
    }
  }, []);

  return (
    <>
      <Hero>
        <div className="home-hero">
          <div className="home-hero-text">
            <div className="home-hero-title">
              <h2 className="brand-color">Hermes Bar</h2>
              <h4 className="">Some of the most popular drink in the world.</h4>
            </div>
            <p>
              Hermes Bar is an international database which it puts{" "}
              <span className="brand-color">Free</span> at your disposal, the
              most important and widespread recepes{" "}
            </p>
            <Link to="/about" className="btn btn-primary">
              More info
            </Link>
          </div>
          <div className="home-hero-img">
            <Lottie
              options={{
                loop: true,
                auto: true,
                reverse: true,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={350}
            />
          </div>
        </div>
      </Hero>
      <section className="container home-screen">
        <div className="search-bar">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="drink">
                <h4>Search your drink</h4>
              </label>
              <div className="input-search">
                <input
                  id="drink"
                  className="input"
                  placeholder={query}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn icon-btn" type="submit">
                  <FaSearch className="icon" />
                </button>
              </div>
            </form>
          </div>
          <p className="result">{count} results</p>
        </div>

        {!isLoading && isError ? (
          <ErrorMessage>No cocktail found</ErrorMessage>
        ) : !isLoading && !isError ? (
          <Cocktails data={data.drinks}></Cocktails>
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
};

export default HomeScreen;
