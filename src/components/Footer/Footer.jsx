/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

const Footer = () => {
  return (
    <footer
      sx={{
        backgroundColor: 'footer',
        py: [3]
      }}>
      <Container
        sx={{
          textAlign: 'center'
        }}>
        &copy; {new Date().getFullYear()} CrazyCode. All Rights Reserved. {'    '}
        <a href="https://onlinewebdesign.ro/" rel="follow">
          Web development
        </a>{' '}
        by OWD.
      </Container>
    </footer>
  )
}

export default Footer
