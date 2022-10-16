import { LoginSvg, Logo } from '../../assets/strings/exports';
import styles from '../../css/login.module.css';
import Form from './Form';

const Login = () => {
  return (
    <section className={styles.container}>
      <header>
        <div className={styles.logo}>
          <img src={Logo} alt='lendsqr-logo' />
        </div>
        <div className={styles.wrapper}>
          <img src={LoginSvg} alt='login-svg' />
          <div className={styles.formSection}>
            <div className={styles.formHeading}>
              <p className={styles.title}>Welcome!</p>
              <p>Enter details to login.</p>
            </div>
            <Form />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Login;
