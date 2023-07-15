import HelloProps from "./Hello.props";
import styles from "./Hello.module.css";
import cn from "classnames";
import { Container } from "../Container/Container";

export const Hello = ({
  className,
  ...props
}: HelloProps): React.JSX.Element => {
  return (
    <section id="hello" className={cn(className, styles.hello)} {...props}>
      <Container>Hello</Container>
    </section>
  );
};
