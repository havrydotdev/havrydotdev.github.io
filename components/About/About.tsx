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
      <Container className={styles.container}>
        <AmigoIcon className={styles.amigo} />
        <div className={styles["about-block"]}>
          <h3 className={styles["about-subheader"]}>Who Am I?</h3>
          <h2 className={styles["about-header"]}>About Me</h2>
          <p className={styles["about-text"]}>
            I am an experienced, motivated fullstack engineer with well
            developed skills. I am a good communicator with proven inter
            personal skills and am used to working in a team whilst also being
            capable of using own initiative. I am skilled In dealing with
            problems in a resourceful manner and negotiating to achieve
            beneficial agreement. I am always enthusiastic to learn and
            undertake new challenges.
          </p>
        </div>
      </Container>
    </section>
  );
};
