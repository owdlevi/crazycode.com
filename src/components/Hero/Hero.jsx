/** @jsx jsx */
import { jsx, Styled, useColorMode } from 'theme-ui'
import Particle from './Particle'

const Hero = () => {
  const [colorMode] = useColorMode()
  const particleColor = (colorMode === 'default' || colorMode === 'light') ? `#000000` : `#ffffff`

  return (
    <div
      sx={{
        color: 'primary',
        fontFamily: 'body',
        height: 'calc(100vh - 80px)',
        variant: 'full',
        position: 'relative',
        display: 'flex',
        flexFlow: 'column'
      }}>
      <div
        className="particles-container"
        sx={{
          position: 'absolute',
          pointerEvents: 'none',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          display: ['none', 'block']
        }}>
        <Particle color={particleColor} />
      </div>
      <div
        sx={{
          maxWidth: '700px',
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
        <Styled.h1>Something cool is coming!</Styled.h1>
        <span
          sx={{
            fontSize: [3, 4, 5],
            display: 'inline-block',
            my: 2,
            textAlgin: 'center'
          }}>
          Hello World! My name is David I'm building this amazing website.
          <br />
          Come back to check my progress.
        </span>
      </div>
    </div>
  )
}

export default Hero
