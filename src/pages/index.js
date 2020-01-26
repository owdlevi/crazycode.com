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
      <SEO title="New website coming soon | CcrazyCode" 
      description="We are working on our new website. Stay tuned." />
      <Hero />
      <Stack />
      <Projects />
      {/* <LatestBlog /> */}
    </CrazyCode>
  )
}

export default Index