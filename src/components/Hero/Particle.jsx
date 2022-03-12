import React from 'react'
import Particles from 'react-tsparticles'

const Particle = ({ color }) => {
  return (
    <Particles
      retina_detect="false"
      width="100%"
      height="100%"
      params={{
        fullScreen: false,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            }
          }
        },
        particles: {
          color: {
            value: color,
            animation: {
              h: {
                enable: true,
                speed: 60
              }
            }
          },
          links: {
            color: {
              value: color
            },
            enable: true,
            opacity: 0.4
          },
          move: {
            enable: true,
            outModes: {
              bottom: 'out',
              left: 'out',
              right: 'out',
              top: 'out'
            },
            speed: 4
          },
          number: {
            density: {
              enable: true
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          size: {
            value: {
              min: 0.1,
              max: 3
            }
          },
          shape: {
            type: 'star',
            stroke: {
              width: 0,
              color: color
            }
          }
        }
      }}></Particles>
  )
}

export default Particle
