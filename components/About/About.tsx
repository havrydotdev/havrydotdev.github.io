import AboutProps from "./About.props";
import styles from "./About.module.css";
import cn from "classnames";

export const About = ({
  className,
  ...props
}: AboutProps): React.JSX.Element => {
  return (
    <section id="about">
      <div className={cn(className, styles.about)} {...props}>
        About
      </div>
    </section>
  );
};
