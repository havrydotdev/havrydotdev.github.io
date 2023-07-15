import ContainerProps from "./Container.props";
import styles from "./Container.module.css";
import cn from "classnames";

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps): React.JSX.Element => {
  return (
    <div className={cn(className, styles.container)} {...props}>
      {children}
    </div>
  );
};
