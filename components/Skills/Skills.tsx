import SkillsProps from "./Skills.props";
import styles from "./Skills.module.css";
import cn from "classnames";
import { Container } from "../Container/Container";
import NextIcon from "@/public/next.svg";
import HTMLIcon from "@/public/html.svg";
import CSSIcon from "@/public/css.svg";
import NuxtIcon from "@/public/nuxt.svg";
import GoIcon from "@/public/golang.svg";

export const Skills = ({
  className,
  ...props
}: SkillsProps): React.JSX.Element => {
  return (
    <section id="skills" className={cn(className, styles.skills)} {...props}>
      <Container className={styles.container}>
        <h3 className={styles["skills-subheader"]}>Skills</h3>
        <h2 className={styles["skills-header"]}>What am I capable of?</h2>
        <div className={styles.icons}>
          <NuxtIcon className={styles.icon} />
          <NextIcon className={styles.icon} />
          <HTMLIcon className={styles.icon} />
          <CSSIcon className={styles.icon} />
          <GoIcon width={189} className={styles.icon} />
        </div>
      </Container>
    </section>
  );
};
