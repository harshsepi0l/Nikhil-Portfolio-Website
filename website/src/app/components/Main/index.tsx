import { Project } from "../../components/Project";
// Main component
export const Main = () => (
  <main>
    <Project
      title="Project 1"
      description="Description of Project 1"
      link="link-to-project-1"
    />
    <Project
      title="Project 2"
      description="Description of Project 2"
      link="link-to-project-2"
    />
    {/* Add more <Project /> components as needed */}
  </main>
);
