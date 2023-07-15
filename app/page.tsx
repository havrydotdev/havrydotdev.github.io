import { Projects } from "@/components/Projects/Projects";
import styles from "./page.module.css";
import { About, Footer, Header, Hello, Skills } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header className={styles.header} />
      <Hello className={styles.hello} />
      <About className={styles.about} />
      <Skills className={styles.skills} />
      <Projects className={styles.projects} />
      <Footer className={styles.footer} />
    </main>
  );
}
