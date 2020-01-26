/** @jsx jsx */
import { jsx, Container, Styled } from "theme-ui";
import {
  ReactJs,
  NodeDotJs,
  Graphql,
  Javascript,
  Html5,
  Php,
  StyledComponents,
  Zeit,
  Netlify,
  NextDotJs,
  Gatsby,
  Amazonaws,
  Amazonalexa,
  Tailwindcss
} from "@icons-pack/react-simple-icons";

const Stack = () => {
  return (
    <Container
      sx={{
        backgroundColor: "secondaryBG",
        py: [3, 4, 5],
        maxWidth: "1500px"
      }}
    >
      <Styled.h2
        sx={{
          textAlign: "center",
          marginBottom: [3, 4],
          fontSize: [4, 5],
          fontWeight: [3]
        }}
      >
        Technology Stack
      </Styled.h2>
      <div
        sx={{
          display: "flex",
          flexFlow: "flex-row",
          justifyContent: "center"
        }}
      >
        <Javascript color="#F7DF1E" size={48} sx={{ marginRight: [2, 3] }} />
        <Html5 color="#E34F26" size={48} sx={{ marginRight: [2, 3] }} />
        <ReactJs color="#61DAFB" size={48} sx={{ marginRight: [2, 3] }} />
        <Gatsby color="#663399" size={48} sx={{ marginRight: [2, 3] }} />
        <NextDotJs size={48} sx={{ marginRight: [2, 3] }} />
        <Tailwindcss color="#38B2AC" size={48} sx={{ marginRight: [2, 3] }} />
        <Graphql color="#E10098" size={48} sx={{ marginRight: [2, 3] }} />
        <NodeDotJs color="#339933" size={48} sx={{ marginRight: [2, 3] }} />
        <Php color="#777BB4" size={48} sx={{ marginRight: [2, 3] }} />
        <Netlify color="#00C7B7" size={48} sx={{ marginRight: [2, 3] }} />
        <Zeit  size={48} sx={{ marginRight: [2, 3] }} />
        <Amazonaws size={48} sx={{ marginRight: [2, 3] }} />
      </div>
    </Container>
  );
};

export default Stack;
