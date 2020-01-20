/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui";

const Projects = () => {
  const project = {
    name: 'Test Project',
    slug: 'projects/test-project',
    tags: ['raspberyPI', 'electron', 'react'],
    featuredImage: 'featuredimage',
  }

  const projectList = [project, project, project, project, project]
  return (
    <section>
      <Container sx={{
        backgroundColor: 'secondatyBG',
        py: [3,4,5]
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
                <div sx={{
                  width: 'calc(100%/3 - 40px/3)',
                  backgroundColor: 'primary',
                  height: '300px',
                  marginBottom: '20px',
                }}
                >
                  {projectItem.name}
                </div>
              )
            })
          }
        </div>
      </Container>
    </section>
  )
}

export default Projects