/** @jsx jsx */
import React, { useState } from "react";
import { jsx, Container, Styled } from "theme-ui";
import CrazyCode from "../components/Layout";
import SEO from "../components/SEO";
import SearchForm from "../components/instantSEO/form";
import { useSpring, animated } from "react-spring";

const InstantSEO = () => {
  
  const fade = useSpring({
    from : {
      opacity: 0
    },
    opacity : 1
  });

  return (
    <CrazyCode>
      <SEO
        title="Instant SEO check your website | CrazyCode"
        description="Instant SEO check your website"
      />
      <Container>
        <animated.div style={fade}>
          <Styled.h1 sx={{ textAlign: "center" }}>Instant SEO tool</Styled.h1>
        </animated.div>
        <SearchForm />
      </Container>
    </CrazyCode>
  );
};

export default InstantSEO;
