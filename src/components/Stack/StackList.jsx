/** @jsx jsx */
import React from 'react'
import { jsx, Container, Styled } from 'theme-ui'
import { useTrail, animated, config } from 'react-spring'

const StackList = ({ stack, isStackVisible }) => {
  console.log(stack)
  const trail = useTrail(stack.length, { opacity: isStackVisible ? 1 : 0 })
  return trail.map((props, index) => (
    <animated.div
      key={index}
      style={props}
      sx={{
        mb: [4, 0]
      }}>
      {stack[index].componentCard}
    </animated.div>
  ))
}

export default StackList
