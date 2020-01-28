/** @jsx jsx */
import { jsx } from 'theme-ui'
import CrazyCode from '../../components/Layout'
import SpringCards from '../../components/SpringCards'
import SEO from '../../components/SEO'

const Index = () => {
  return (
    <CrazyCode>
      <SEO title="New website coming soon | CrazyCode" description="We are working on our new website. Stay tuned." />
      <SpringCards />
    </CrazyCode>
  )
}

export default Index
