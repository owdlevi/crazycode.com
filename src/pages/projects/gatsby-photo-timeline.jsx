/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import CrazyCode from '../../components/Layout'
import SEO from '../../components/SEO'
import budapest from '../../content/assets/budapest.jpg'

const Index = () => {
  return (
    <CrazyCode>
      <SEO
        title="Gatsby Photo Timeline - built with love & coffe | CrazyCode"
        description="Amazing Photo timeline built for my favorite dog for her first birthday."
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
          Gatsby Photo Timeline
        </Styled.h1>
        <Styled.p>
          Amazing photo timeline built for my favorite puppy Peanut, my gift for her first birthday. Every label is genretad from the exif
          data of the picture, calculating the exact age of the puppy when the picture was taken.
        </Styled.p>
        <Styled.p>
          Check the website at:{' '}
          <a href="https://peanut.now.sh/" target="_blank" without rel="noopener noreferrer" sx={{ color: 'primary' }}>
            https://peanut.now.sh/
          </a>
        </Styled.p>
      </div>
      <div
        sx={{
          maxWidth: '1400px',
          width: '100%',
          px: '20px',
          mx: 'auto',
          mb: '40px',
          textAlign: 'center',
          height: '800px'
        }}>
        <iframe sx={{ border: 0 }} src="https://peanut.now.sh/" title="Peanut 1st year" width="100%" height="100%" border="0" />
      </div>
    </CrazyCode>
  )
}

export default Index
