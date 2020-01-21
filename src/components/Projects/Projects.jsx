/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui";
import featuredImage from '../../content/assets/placeholder2.jpg'
import Card from '../Card/Card'

const Projects = () => {
  const project = {
    name: 'Test Project',
    slug: 'projects/test-project',
    tags: ['raspberyPI', 'electron', 'react'],
    featuredImage: '../../content/assets/placeholder.jpg',
  }

  const projectList = [project, project, project, project, project]
  return (
    <section>
      <Container sx={{
        backgroundColor: 'secondaryBG',
        py: [3,4,5],
        maxWidth: '1400px',
      }}>
        <Styled.h2 sx={{
          textAlign: 'center',
          marginBottom: [3,4],
          fontSize: [4,5],
          fontWeight: [3],
        }}
        >Latest Projects</Styled.h2>

        <div className='projectList'  sx={{
          marginBottom: [2,3],
          display: 'flex',
          flexFlow: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          mx: '-10px',
        }}>
          {
            projectList.map((projectItem) => {
              return(
               <Card image={featuredImage} />
              )
            })
          }
        </div>
      </Container>
    </section>
  )
}

export default Projects