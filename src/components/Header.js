import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles['nav-header']}>
    <nav className={styles['nav-bar']}>
      <div>
        <p className={styles.logo}>Stock-Market</p>
      </div>
    </nav>
  </header>
);

export default Header;
