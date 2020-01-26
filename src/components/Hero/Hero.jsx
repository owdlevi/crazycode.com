/** @jsx jsx */
import { jsx, Styled, useColorMode } from "theme-ui";
import Particle from './Particle'

const Hero = () => {
  const [colorMode] = useColorMode();
  const particleColor = (colorMode === "light") ? `#000000` : `#ffffff`
  console.log(particleColor)
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
      <div className="particles-container"
        sx={{
          position: "absolute",
          pointerEvents: "none",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: ["none", "block"]
        }}
      >
        <Particle color={particleColor}/>
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
          Hey there! I’m David and I started to build this cool website.
          <br />
          Come back every day to check my progress.
        </span>
      </div>
    </div>
  );
};

export default Hero;
