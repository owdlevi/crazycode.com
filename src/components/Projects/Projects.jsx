/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui'
import featuredImage from '../../content/assets/peanut.png'
import budapest from '../../content/assets/budapest.jpg'
import featuredImage3 from '../../content/assets/spring_card.png'
import serviciiRomania from '../../content/assets/servicii-romania-landing.jpg'
import customAutocomplete from '../../content/assets/custom-mui-autocomplete.jpg'
import Card from '../Card/Card'

const Projects = () => {
  const projectList = [
    {
      projectName: 'Autocomplete Material UI v4 component',
      slug: 'projects/custom-autocomplete-material-ui-v4',
      tags: ['v4', 'MUI', 'material-ui', 'react'],
      featuredImage: customAutocomplete,
      url: '/projects/custom-autocomplete-material-ui-v4'
    },
    {
      projectName: 'Servicii Romania',
      slug: 'projects/nextjs-serviciiromania',
      tags: ['nextjs', 'graphql', 'strapi'],
      featuredImage: serviciiRomania,
      url: '/projects/nextjs-serviciiromania'
    },
    {
      projectName: 'Gatsby Theme Budapest',
      slug: 'projects/gatsby-theme-budapest',
      tags: ['gatsby', 'budapest', 'react'],
      featuredImage: budapest,
      url: '/projects/gatsby-theme-budapest'
    },
    {
      projectName: 'React Spring Cards',
      slug: 'projects/react-spring-cards',
      tags: ['animation', 'react spring', 'react'],
      featuredImage: featuredImage3,
      url: '/projects/react-spring-cards/'
    },
    {
      projectName: "Peanut's 1st year",
      slug: 'projects/gatsby-photo-timeline',
      tags: ['gatsby', 'react', 'exif'],
      featuredImage: featuredImage,
      url: 'projects/gatsby-photo-timeline/'
    }
  ]

  return (
    <section>
      <Container
        sx={{
          backgroundColor: 'secondaryBG',
          py: [3, 4, 5],
          px: [3, 4, 5],
          maxWidth: '1500px'
        }}>
        <Styled.h2
          sx={{
            textAlign: 'center',
            marginBottom: [3, 4],
            fontSize: [4, 5],
            fontWeight: [3]
          }}>
          Latest Projects
        </Styled.h2>

        <div
          className="projectList"
          sx={{
            marginBottom: [2, 3],
            display: 'flex',
            flexFlow: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            mx: '-10px'
          }}>
          {projectList.map((projectItem) => {
            return <Card key={projectItem.projectName} project={projectItem} />
          })}
        </div>
      </Container>
    </section>
  )
}

export default Projects
