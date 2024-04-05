import styles from "./Footer.module.scss";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className={styles.Footer} id="contact">
      <a
        href="mailto: delbertluo.work@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <MdEmail size="2em" className={styles.Footer__icon} />
      </a>
      <a
        href="https://www.linkedin.com/in/delbertluo/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaLinkedinIn size="2em" className={styles.Footer__icon} />
      </a>
      <a
        href="https://github.com/del8527"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaGithub size="2em" className={styles.Footer__icon} />
      </a>
    </div>
  );
}

export default Footer;
