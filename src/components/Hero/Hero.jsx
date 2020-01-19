/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Particles from "react-particles-js";

const Hero = () => {
  return (
    <div
      sx={{
        color: "primary",
        fontFamily: "body",
        height: "calc(100vh - 80px)",
        variant: "full",
        position: "relative",
        display: "flex",
        flexFlow: "column"
      }}
    >
      <div
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%"
        }}
      >
        <Particles
          width="100%"
          height="100%"
          params={{
            particles: {
              number: {
                value: 80
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            },
            color: {
              value: "#000000"
            }
          }}
        />
      </div>
      <div
        sx={{
          maxWidth: "700px",
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <Styled.h1>Something cool is coming!</Styled.h1>
        <span
          sx={{
            fontSize: [3, 4, 5],
            display: "inline-block",
            my: 2,
            textAlgin: "center"
          }}
        >
          Hey there I’m David and I started to build this cool website.
          <br />
          Come back every day to check my progress.
        </span>
      </div>
    </div>
  );
};

export default Hero;
