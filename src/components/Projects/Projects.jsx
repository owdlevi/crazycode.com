/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui";
import featuredImage from "../../content/assets/over2goals.jpg";
import featuredImage2 from "../../content/assets/furculitasicutit.jpg";

import Card from "../Card/Card";

const Projects = () => {
  const projectList = [
    {
      projectName: "Over2Goals",
      slug: "projects/test-project",
      tags: ["raspberyPI", "electron", "react"],
      featuredImage: featuredImage
    },
    {
      projectName: "Furculita si Cutit",
      slug: "projects/test-project",
      tags: ["raspberyPI", "electron", "react"],
      featuredImage: featuredImage2
    },
    {
      projectName: "Over2Goals",
      slug: "projects/test-project",
      tags: ["raspberyPI", "electron", "react"],
      featuredImage: featuredImage
    }
  ];

  return (
    <section>
      <Container
        sx={{
          backgroundColor: "secondaryBG",
          py: [3, 4, 5],
          maxWidth: "1500px"
        }}
      >
        <Styled.h2
          sx={{
            textAlign: "center",
            marginBottom: [3, 4],
            fontSize: [4, 5],
            fontWeight: [3]
          }}
        >
          Latest Projects
        </Styled.h2>

        <div
          className="projectList"
          sx={{
            marginBottom: [2, 3],
            display: "flex",
            flexFlow: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            mx: "-10px"
          }}
        >
          {projectList.map(projectItem => {
            return <Card project={projectItem} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
