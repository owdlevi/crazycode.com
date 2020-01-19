import React from 'react'
import Particles from "react-particles-js";

const Particle = ( {color} ) => {
  return(
    <Particles
          width="100%"
          height="100%"
          params={{
            particles: {
              number: {
                value: 80
              },
              size: {
                value: 3
              },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            },
            color: {
              value: color
            },
            shape: {
              type: "star",
              stroke: {
                width: 0,
                color: color
              },
            },
            line_linked: {
              color: color
            }
          },
          }}
        ></Particles>
  )
}

export default Particle