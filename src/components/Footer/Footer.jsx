/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

const Footer = () => {
  return (
    <footer
      sx={{
        backgroundColor: 'footer'
      }}>
      <Container
        sx={{
          textAlign: 'center'
        }}>
        &copy; {new Date().getFullYear()} CrazyCode. All Rights Reserved.
      </Container>
    </footer>
  )
}

export default Footer
