/** @jsx jsx */
import { Layout, Main, jsx } from "theme-ui";
import Header from "../Header";
import Footer from "../Footer";
import ResetCSS from "./resetCSS";

const CrazyCode = ({ children }) => {
  return (
    <Layout>
      <ResetCSS />

      <Header />
      <Main>{children}</Main>
      <Footer>This is the footer</Footer>
    </Layout>
  );
};

export default CrazyCode;
