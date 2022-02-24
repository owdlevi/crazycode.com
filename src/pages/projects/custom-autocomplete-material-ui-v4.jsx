/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import CrazyCode from '../../components/Layout'
import SEO from '../../components/SEO'
import budapest from '../../content/assets/budapest.jpg'

const Index = () => {
  return (
    <CrazyCode>
      <SEO
        title="Custom Autocomplete Material UI v4 component - built with love & coffee | CrazyCode"
        description="Custom Autocomplete Material UI component for React built with material ui v4."
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
          Custom Autocomplete Material UI v4
        </Styled.h1>
        <Styled.p>
          Custom Autocomplete Material UI component for React built with material ui v4. Based on the GitHub's picker demo component from
          Material UI.
        </Styled.p>
        <Styled.p>
          Demo and code is available{' '}
          <a href="https://codesandbox.io/s/custom-autocomplete-material-ui-v4-obqroq" target="_blank" without sx={{ color: 'primary' }}>
            https://codesandbox.io/s/custom-autocomplete-material-ui-v4-obqroq
          </a>
        </Styled.p>
      </div>
      <div
        sx={{
          maxWidth: '1000px',
          width: '100%',
          px: '20px',
          mx: 'auto',
          mb: '40px',
          textAlign: 'center',
          height: '500px'
        }}>
        <iframe
          src="https://codesandbox.io/embed/custom-autocomplete-material-ui-v4-obqroq?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview"
          style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
          title="Custom Autocomplete Material UI v4"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
      </div>
    </CrazyCode>
  )
}

export default Index
