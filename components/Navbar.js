import { Link as ScrollLink, animateScroll } from 'react-scroll';
import styles from './navbar.module.css';

const Navbar = () => {
  const navbarHeight = 60; // set this to the height of your navbar in pixels
  const bannerHeight = 200; // set this to the height of your banner in pixels

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span>Boba Breaks</span>
      </div>
      <div className={styles.links}>
        <ScrollLink to="people" className={styles.link} smooth={true} duration={500} offset={-navbarHeight}>People</ScrollLink>
        <ScrollLink to="learn" className={styles.link} smooth={true} duration={500} offset={-navbarHeight}>Learn</ScrollLink>
        <ScrollLink to="jobs" className={styles.link} smooth={true} duration={500} offset={-navbarHeight}>Jobs</ScrollLink>
        <ScrollLink to="advice" className={styles.link} smooth={true} duration={500} offset={-navbarHeight}>Advice</ScrollLink>
      </div>
    </nav>
  );
};

export default Navbar;
