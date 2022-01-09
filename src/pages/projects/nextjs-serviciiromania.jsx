/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import CrazyCode from '../../components/Layout'
import { ServiciiRomaniaStack } from '../../components/Stack/ServiciiRomaniaStack'
import SEO from '../../components/SEO'
import serviciiRomania from '../../content/assets/servicii-romania-landing.jpg'

const Index = () => {
  return (
    <CrazyCode>
      <SEO
        title="Servicii Romania - create landing pages for your business | CrazyCode"
        description="Servicii Romania - small business landing page template for your business."
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
          Servicii Romania
        </Styled.h1>
        <Styled.p>Servicii Romania - small business landing page template for your business.</Styled.p>
        <Styled.p>Built with NextJS, deployed on Vercel, backend powered by Strapi.</Styled.p>
        <Styled.p>
          Check the demo at:{' '}
          <a href="https://serviciiromania.ro/" target="_blank" without sx={{ color: 'primary' }}>
            https://serviciiromania.ro/
          </a>
        </Styled.p>
        <ServiciiRomaniaStack />
        <div sx={{ marginTop: 40 }}>
          <img
            src={serviciiRomania}
            alt="Servicii Romania - landing page"
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
