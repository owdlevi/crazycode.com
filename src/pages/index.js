/** @jsx jsx */
import { jsx } from 'theme-ui'
import CrazyCode from '../components/Layout'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Stack from '../components/Stack'
import SEO from '../components/SEO'

const Index = () => {
  return (
    <CrazyCode>
      <SEO
        title="Web Development with the latest technology stack | CrazyCode"
        description="Checkout may latest React components and Gatsby demo websites."
      />
      <Hero />
      <Stack />
      <Projects />
      {/* <LatestBlog /> */}
    </CrazyCode>
  )
}

export default Index
