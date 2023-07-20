import HelloProps from "./Hello.props";
import styles from "./Hello.module.css";
import cn from "classnames";
import { Container } from "../Container/Container";
import GoIcon from "@/public/go.svg";
import GithubIcon from "@/public/github.svg";

export const Hello = ({
  className,
  ...props
}: HelloProps): React.JSX.Element => {
  return (
    <section id="hello" className={cn(className, styles.hello)} {...props}>
      <Container className={styles.container}>
        <div className={styles.text}>
          <h3 className={styles.hi}>Hi Everyone, I am</h3>
          <h1 className={styles.me}>Havrylenko Ivan</h1>
          <p className={styles.dev}>
            An interested fullstack developer from Ukraine
          </p>
          <a
            href="https://github.com/gavrylenkoIvan"
            className={styles.git}
            target="_blank"
          >
            <div className={styles["btn-content"]}>
              <GithubIcon className={styles.icon} />
              <p className={styles["btn-text"]}>Github profile</p>
            </div>
          </a>
        </div>
        <div className={styles.go}>
          <GoIcon />
        </div>
      </Container>
    </section>
  );
};
