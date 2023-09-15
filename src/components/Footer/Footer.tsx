import styles from "./Footer.module.scss";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className={styles.Footer}>
      <a href="mailto: d45luo@uwaterloo.ca">
        <MdEmail size="2em" className={styles.Footer__icon} />
      </a>
      <a href="https://www.linkedin.com/in/delbertluo/">
        <FaLinkedinIn size="2em" className={styles.Footer__icon} />
      </a>
      <a href="https://github.com/del8527">
        <FaGithub size="2em" className={styles.Footer__icon} />
      </a>
    </div>
  );
}

export default Footer;
