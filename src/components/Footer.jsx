import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; Viliam Novický {new Date().getFullYear()}</p>
      <div className={styles.footerLinks}>
        <a
          className={styles.footerLink}
          href="https://www.facebook.com/ViliamNovickyVisualArts"
          target="_blank"
        >
          <img src="../../public/icons/facebook.svg"></img>
        </a>
        <a
          className={styles.footerLink}
          href="https://www.instagram.com/viliamnovicky/"
          target="_blank"
        >
          <img src="../../public/icons/instagram.svg"></img>
        </a>
        <a
          className={styles.footerLink}
          href="https://www.youtube.com/channel/UCp9fNN9AzBfN6XVvNykU-_Q"
          target="_blank"
        >
          <img src="../../public/icons/youtube.svg"></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
