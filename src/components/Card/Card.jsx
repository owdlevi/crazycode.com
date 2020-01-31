/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { useSpring, animated } from 'react-spring'
import './styles.css'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Card = ({ project }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }))
  return (
    <animated.div
      className="card"
      sx={{
        width: ['100%', '100%,', 'calc(100%/3 - 80px/3)']
      }}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}>
      <Link to={project.url}>
        <div
          sx={{
            height: '500px',
            width: '100%',
            overflow: 'hidden',
            position: 'relative'
          }}>
          <img src={project.featuredImage} alt="" />
        </div>
        <div
          sx={{
            backgroundColor: 'footer',
            color: 'primary',
            display: 'flex',
            flexFlow: 'row',
            justifyContent: 'space-between',
            verticalAlign: 'middle',
            boxShadow: theme => `0 0 15px ${theme.colors.shadow}`
          }}>
          <div
            sx={{
              width: '100%',
              padding: [2, 3],
              position: 'realtive'
            }}>
            <h3
              sx={{
                width: '100%',
                textAlign: 'center',
                letterSpacing: '0.8px',
                fontSize: [4],
                fontWeight: '600',
                paddingTop: [3]
              }}>
              {project.projectName}
            </h3>
          </div>
        </div>
      </Link>
    </animated.div>
  )
}

export default Card
