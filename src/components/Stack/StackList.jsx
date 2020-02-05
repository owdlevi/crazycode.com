/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useTrail, animated } from 'react-spring'

const StackList = ({ stack, isStackVisible }) => {
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
