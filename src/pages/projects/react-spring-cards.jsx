/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import CrazyCode from '../../components/Layout'
import SpringCards from '../../components/SpringCards'
import SEO from '../../components/SEO'

const Index = () => {
  return (
    <CrazyCode>
      <SEO
        title="React Swipeable Cards with React Spring | CrazyCode"
        description="React component built with React Spring animation. Easily customizable swipeable cards."
      />
      <Styled.h1
        sx={{
          textAlign: 'center',
          fontSize: [3, 4, 5],
          maxWidth: '400px',
          px: [2, 3],
          my: [4, 5],
          mx: 'auto'
        }}>
        Swipeable Cards with React Spring
      </Styled.h1>
      <SpringCards />
    </CrazyCode>
  )
}

export default Index
