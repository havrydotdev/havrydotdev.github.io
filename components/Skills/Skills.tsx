import SkillsProps from "./Skills.props";
import styles from "./Skills.module.css";
import cn from "classnames";

export const Skills = ({
  className,
  ...props
}: SkillsProps): React.JSX.Element => {
  return (
    <section id="skills" className={cn(className, styles.skills)} {...props}>
      Skills
    </section>
  );
};
