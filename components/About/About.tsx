import AboutProps from "./About.props";
import styles from "./About.module.css";
import cn from "classnames";
import { Container } from "../Container/Container";
import AmigoIcon from "@/public/amigo.svg";

export const About = ({
  className,
  ...props
}: AboutProps): React.JSX.Element => {
  return (
    <section id="about" className={cn(className, styles.about)} {...props}>
      <Container>
        <div className={styles.container}>
          <AmigoIcon className={styles.amigo} />
          <div className={styles["about-block"]}>
            <h3 className={styles["about-subheader"]}>About</h3>
            <h2 className={styles["about-header"]}>About Me?</h2>
            <p className={styles["about-text"]}>
              I am an experienced, motivated fullstack engineer with well
              developed skills. I have used frameworks like Next.js, Nuxt and
              Vue. Also I have experience in both Typescript and Javascript. I
              am keen on Go and tools like Docker and Github actions. I have a
              plenty of projects so you can visit my Github to see them.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
