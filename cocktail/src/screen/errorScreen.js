import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import animationData from "../assets/animation/not-found.json";

import { Link } from "react-router-dom";
import useTitle from "../usTitle";

const ErrorScreen = () => {
  useTitle("Page not found");
  return (
    <div>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          reverse: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        width={500}
        height={500}
      />
      <h3>Pagina non trovata</h3>
      <Link to="/" className="btn btn-pimary">
        Back to homepage
      </Link>
    </div>
  );
};

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  display: --ms-grid;
  display: --moz-grid;
  display: -webkit-grid;
  place-items: center;
  h3 {
    text-transform: uppercase;
  }
  .btn {
    border-radius: 22px;
  }
  @media screen and (max-width: 992px) {
    min-height: 84.5vh;
  }
`;

export default ErrorScreen;
