import ProjectsProps from "./Projects.props";
import styles from "./Projects.module.css";
import cn from "classnames";
import { Container } from "../Container/Container";
import { ProjectInfo } from "@/interfaces/project.interface";
import Image from "next/image";

export const projectsArray: ProjectInfo[] = [
  {
    header: "Notik",
    text: "Fullstack note taking app written with go and vue",
    img: "https://github.com/gavrylenkoIvan/images/blob/master/notik.jpg",
    url: "https://github.com/gavrylenkoIvan/gonotes",
  },
  {
    header: "Balance service",
    text: "CRUD api written in go",
    img: "https://github.com/gavrylenkoIvan/images/blob/master/balance.png",
    url: "https://github.com/gavrylenkoIvan/balance-service",
  },
  {
    header: "Portfolio",
    text: "My personal website written in TypeScript & Next",
    img: "https://github.com/gavrylenkoIvan/images/blob/master/portfolio.png",
    url: "https://github.com/gavrylenkoIvan/next-portfolio",
    demo: "https://gavrylenkoivan.github.io",
  },
];

export const Projects = ({
  className,
  ...props
}: ProjectsProps): React.JSX.Element => {
  const renderLinks = (url: string | undefined, gh: string) => {
    const github = (
      <a className={styles["project-github-link"]} href={gh} target="_blank">
        Github
      </a>
    );
    if (url != undefined) {
      return (
        <div className={styles.links}>
          {github}
          <a
            className={styles["project-github-demo"]}
            href={url}
            target="_blank"
          >
            Live demo
          </a>
        </div>
      );
    } else {
      return <div className={styles.links}>{github}</div>;
    }
  };
  return (
    <section
      id="projects"
      className={cn(className, styles.projects)}
      {...props}
    >
      <Container>
        <div className={styles.container}>
          <h3 className={styles["projects-subheader"]}>Projects</h3>
          <h2 className={styles["projects-header"]}>What have I made?</h2>
          <div className={styles["projects-list"]}>
            {projectsArray.map((p) => (
              <div className={styles["project-github"]} key={p.url}>
                <Image
                  alt="Project image"
                  src={p.img}
                  width={363}
                  height={198}
                  unoptimized={true}
                  className={styles["project-github-image"]}
                />
                <h3 className={styles["project-github-header"]}>{p.header}</h3>
                <p className={styles["project-github-text"]}>{p.text}</p>
                {renderLinks(p.demo, p.url)}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
