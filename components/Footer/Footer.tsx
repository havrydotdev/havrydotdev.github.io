import FooterProps from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { Container } from "../Container/Container";
import TelegramIcon from "@/public/tg.svg";

export const Footer = ({
  className,
  ...props
}: FooterProps): React.JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props} id="footer">
      <Container>
        <div className={styles.container}>
          <h3 className={styles.contacts}>Contacts</h3>
          <h2 className={styles.gtch}>Get in touch</h2>
          <h4 className={styles.email}>havrylenko.inbox@gmail.com</h4>
          <a
            href="https://t.me/havrylenko_ivan"
            target="_blank"
            className={styles.tg}
          >
            <TelegramIcon />
          </a>
          <p className={styles.copyright}>Copyright ©2023</p>
        </div>
      </Container>
    </footer>
  );
};
