/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui'
import featuredImage from '../../content/assets/over2goals.jpg'
import featuredImage2 from '../../content/assets/furculitasicutit.jpg'
import featuredImage3 from '../../content/assets/spring_card.png'

import Card from '../Card/Card'

const Projects = () => {
  const projectList = [
    {
      projectName: 'Over2Goals',
      slug: 'projects/react-spring-cards',
      tags: ['raspberyPI', 'electron', 'react'],
      featuredImage: featuredImage,
      url: '/'
    },
    {
      projectName: 'Furculita si Cutit',
      slug: 'projects/react-spring-cards',
      tags: ['raspberyPI', 'electron', 'react'],
      featuredImage: featuredImage2,
      url: '/'
    },
    {
      projectName: 'React Spring Cards',
      slug: 'projects/react-spring-cards',
      tags: ['raspberyPI', 'electron', 'react'],
      featuredImage: featuredImage3,
      url: '/projects/react-spring-cards/'
    }
  ]

  return (
    <section>
      <Container
        sx={{
          backgroundColor: 'secondaryBG',
          py: [3, 4, 5],
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
          {projectList.map(projectItem => {
            return <Card key={projectItem.projectName} project={projectItem} />
          })}
        </div>
      </Container>
    </section>
  )
}

export default Projects
