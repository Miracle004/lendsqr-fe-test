import React from 'react';
import styles from './LoginPage.module.scss';
import LoginForm from '../../components/features/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.loginPage}>
      {/* Left Panel - Brand Section */}
      <div className={styles.leftPanel}>
        <div className={styles.brandContent}>
          <div className={styles.logo}>
            <img src="/icons/lendsqr_logo.svg" alt="Lendsqr Logo" />
          </div>
          
          <div className={styles.illustration}>
            <img 
              src="/icons/pablo-sign-in 1.svg" 
              alt="Lendsqr illustration" 
            />
          </div>
        </div>
      </div>
      
      {/* Right Panel - Login Form */}
      <div className={styles.rightPanel}>
        <div className={styles.formContainer}>
          <h2 className={styles.welcome}>Welcome!</h2>
          <p className={styles.subtitle}>Enter details to login.</p>
          
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
