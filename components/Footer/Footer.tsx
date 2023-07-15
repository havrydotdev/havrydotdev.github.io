import FooterProps from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";

export const Footer = ({
  className,
  ...props
}: FooterProps): React.JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props} id="footer">
      Footer
    </footer>
  );
};
