/** @jsx jsx */
import { jsx, css, useColorMode } from "theme-ui";
import Sticky from "react-stickynode";
import { Link } from "gatsby";
import Logo from "./Logo";
import Switch from "./switch";

import sun from "../../content/assets/sun.png";
import moon from "../../content/assets/moon.png";

const Header = () => {
  const iconCss = [
    css({
      pointerEvents: `none`
    }),
    { margin: 4 } // Explicitly leave margin out of theme-ui, this positioning should not change based on theme
  ];

  const checkedIcon = (
    <img
      alt="moon indicating dark mode"
      src={moon}
      width="16"
      height="16"
      role="presentation"
      css={iconCss}
    />
  );

  const uncheckedIcon = (
    <img
      alt="sun indicating light mode"
      src={sun}
      width="16"
      height="16"
      role="presentation"
      css={iconCss}
    />
  );

  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
      <header
        sx={{
          display: "grid",
          gridGap: 3,
          height: "80px",
          mx: "auto",
          px: 3,
          py: 3,
          gridAutoFlow: "row",
          backgroundColor: "background",
          gridTemplateColumns: ["repeat(3, 1fr)", "repeat(3, 1fr)"],
          boxShadow: theme => `0 0 15px ${theme.colors.shadow}`
        }}
      >
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gridColumnStart: [1, 2],
            gridColumnEnd: [3, 3],
            order: [0, 1]
          }}
        >
          <Link to="/" title="Home">
            <Logo />
            <span
              sx={{
                position: "absolute",
                width: 1,
                height: 1,
                overflow: "hidden",
                top: -9999
              }}
            >
              Home
            </span>
          </Link>
        </div>
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            display: ["none","flex"],
          }}
        >
          <Link
            to="/"
            sx={{
              variant: "navlink",
              p: 2
            }}
          >
            Home
          </Link>
        </div>
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            order: 2
          }}
        >
          <Switch
            aria-label="Toggle dark mode"
            checkedIcon={checkedIcon}
            uncheckedIcon={uncheckedIcon}
            checked={isDark}
            onChange={toggleColorMode}
          />
        </div>
      </header>
    </Sticky>
  );
};

export default Header;
