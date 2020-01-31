/** @jsx jsx */
import { useState } from 'react'
import { jsx, Container, Styled } from 'theme-ui'
import { useSpring, animated, config } from 'react-spring'
import { Waypoint } from 'react-waypoint'
import StackList from './StackList'
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
} from '@icons-pack/react-simple-icons'

const stackItems = [
  {
    key: 1,
    componentCard: <Javascript color="#F7DF1E" size={48} sx={{ marginRight: [2, 3] }} />
  },
  {
    key: 2,
    componentCard: <Html5 color="#E34F26" size={48} sx={{ marginRight: [2, 3] }} />
  },
  {
    key: 3,
    componentCard: <ReactJs color="#61DAFB" size={48} sx={{ marginRight: [2, 3] }} />
  },
  {
    key: 4,
    componentCard: <Gatsby color="#663399" size={48} sx={{ marginRight: [2, 3] }} />
  },
  {
    key: 5,
    componentCard: <NextDotJs size={48} sx={{ marginRight: [2, 3] }} />
  },
  {
    key: 6,
    componentCard: <Tailwindcss color="#38B2AC" size={48} sx={{ marginRight: [2, 3] }} />
  },
  {
    key: 7,
    componentCard: <Graphql color="#E10098" size={48} sx={{ marginRight: [2, 3] }} />
  },
  {
    key: 8,
    componentCard: <NodeDotJs color="#339933" size={48} sx={{ marginRight: [2, 3] }} />
  },
  {
    key: 9,
    componentCard: <Php color="#777BB4" size={48} sx={{ marginRight: [2, 3] }} />
  },
  {
    key: 10,
    componentCard: <Netlify color="#00C7B7" size={48} sx={{ marginRight: [2, 3] }} />
  },
  {
    key: 11,
    componentCard: <Zeit size={48} sx={{ marginRight: [2, 3] }} />
  },
  {
    key: 12,
    componentCard: <Amazonaws size={48} sx={{ marginRight: [2, 3] }} />
  }
]

const Stack = () => {
  const [isStackVisible, setStackVisible] = useState(false)

  return (
    <Container
      sx={{
        backgroundColor: 'white',
        pt: [2, 4, 5],
        pb: 0,
        maxWidth: '1500px'
      }}>
      <Styled.h2
        sx={{
          textAlign: 'center',
          marginBottom: [3, 4],
          fontSize: [4, 5],
          fontWeight: [3]
        }}>
        Technology Stack
      </Styled.h2>
      <div
        sx={{
          display: 'flex',
          flexFlow: 'flex-row',
          justifyContent: 'center'
        }}>
        <Waypoint
          key="stack-items-container"
          bottomOffset="10%"
          onEnter={() => setStackVisible(true)}
          onLeave={() => setStackVisible(false)}
        />
        <StackList stack={stackItems} isStackVisible={isStackVisible} />
      </div>
    </Container>
  )
}

export default Stack
