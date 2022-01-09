/** @jsx jsx */
import { useState } from 'react'
import { jsx, Container, Styled } from 'theme-ui'
import { Waypoint } from 'react-waypoint'
import StackList from './StackList'
import { ReactJs, Graphql, Javascript, NextDotJs, Chakraui, Strapi, Vercel } from '@icons-pack/react-simple-icons'

const stackItems = [
  {
    key: 1,
    componentCard: <Javascript color="#F7DF1E" size={48} sx={{ marginRight: [2, 3] }} />
  },

  {
    key: 2,
    componentCard: <ReactJs color="#61DAFB" size={48} sx={{ marginRight: [2, 3] }} />
  },

  {
    key: 3,
    componentCard: <NextDotJs size={48} sx={{ marginRight: [2, 3] }} />
  },
  {
    key: 4,
    componentCard: <Chakraui color="#319795" size={48} sx={{ marginRight: [2, 3] }} />
  },
  {
    key: 5,
    componentCard: <Strapi color="#2F2E8B" size={48} sx={{ marginRight: [2, 3] }} />
  },
  {
    key: 6,
    componentCard: <Graphql color="#E10098" size={48} sx={{ marginRight: [2, 3] }} />
  },
  {
    key: 7,
    componentCard: <Vercel color="#000000" size={48} sx={{ marginRight: [2, 3] }} />
  }
]

export const ServiciiRomaniaStack = () => {
  const [isStackVisible, setStackVisible] = useState(false)

  return (
    <Container
      sx={{
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
          flexWrap: 'wrap',
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
