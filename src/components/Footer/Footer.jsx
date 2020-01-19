/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui";

const Footer = () => {
  return (
    <footer
      sx={{
        backgroundColor: "footer"
      }}
    >
      <Container
        sx={{
          textAlign: "center"
        }}
      >
        We have footer too :)
      </Container>
    </footer>
  );
};

export default Footer;
