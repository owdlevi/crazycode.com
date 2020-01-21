/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import { useSpring, animated } from "react-spring";
import "./styles.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card = ({ project }) => {
  console.log(project);
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div
        sx={{
          height: "100%",
          overflow: "hidden",
          position: "relative"
        }}
      >
        <img src={project.featuredImage} alt="" />
        <div
          sx={{
            backgroundColor: "primary",
            height: "20%",
            width: "100%",
            zIndex: "123",
            bottom: "0",
            left: "0",
            position: "absolute",
            backgroundColor: "bgTransparent",
            display: "flex",
            justifyContent: "center",
            verticalAlign: "middle",
            paddingTop: "20px",
            // boxShadow: '2px -2px 16px 3px ${theme.colors.shadow},
            boxShadow: theme => `0 0 15px ${theme.colors.shadow}`
          }}
        >
          <h3>{project.projectName}</h3>
        </div>
      </div>
    </animated.div>
  );
};

export default Card;
