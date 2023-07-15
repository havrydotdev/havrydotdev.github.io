import ProjectsProps from "./Projects.props";
import styles from "./Projects.module.css";
import cn from "classnames";

export const Projects = ({
  className,
  ...props
}: ProjectsProps): React.JSX.Element => {
  return (
    <section id="projects">
      <div className={cn(className, styles.projects)} {...props}>
        Projects
      </div>
    </section>
  );
};
