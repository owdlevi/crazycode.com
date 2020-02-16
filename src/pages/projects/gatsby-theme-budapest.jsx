/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import CrazyCode from '../../components/Layout'
import SEO from '../../components/SEO'
import budapest from '../../content/assets/budapest.jpg'

const Index = () => {
  return (
    <CrazyCode>
      <SEO
        title="Gatsby Theme Budapest - built with love & coffe | CrazyCode"
        description="Gatsby Theme Budapest is simple and modern theme for blogging."
      />
      <div
        sx={{
          maxWidth: '700px',
          mx: 'auto',
          textAlign: 'center'
        }}>
        <Styled.h1
          sx={{
            fontSize: [3, 4, 5],
            px: [2, 3],
            my: [4, 5]
          }}>
          Gatsby Theme Budapest
        </Styled.h1>
        <Styled.p>
          Modern minimalist Gatsby Theme, this theme was built for <strong>Gatsby</strong> with <strong>Theme UI.</strong>
        </Styled.p>
        <Styled.p>
          Check the demo at:{' '}
          <a href="https://budapest.netlify.com/" target="_blank" without rel="noopener noreferrer" sx={{ color: 'primary' }}>
            https://budapest.netlify.com/
          </a>
        </Styled.p>
        <div>
          <img
            src={budapest}
            alt="Gatsby Theme Budapest screenshot"
            sx={{
              display: 'inline-block',
              maxWidth: '100%'
            }}
          />
        </div>
      </div>
    </CrazyCode>
  )
}

export default Index
